import { nearStore } from '../stores/near';

// afaik this has to be run just once the contract has been deployed and before it's used
// I've already ran this on our contract with the token value of 1000000000 - that's our current total supply
// Accepts accountID & totalSupply of token that you wanna create. accountID gets all tokens.
async function initTheContractDefault(accountId, totalSupply) {
    return await window.tokenContract.new_default_meta(({ owner_id: accountId, total_supply: totalSupply }));
}

//Returns the total number of tokens that exist in circulation
export async function getTotalSupply() {
    return await window.tokenContract.ft_total_supply();
}

//Returns the number of tokens the user has
export async function getBalance(accountId) {
    return await window.tokenContract.ft_balance_of({ account_id: accountId });
}

//Transfers token to user with receiverIdm returns (can attach a note - memo), returns void
export function sendToken(receiverId, amount, memo) {
    window.tokenContract.ft_transfer({ receiver_id: receiverId, amount: amount, memo: memo });
}

//fairly confused about this one, -> https://nomicon.io/Standards/FungibleToken/Core#reference-level-explanation
export async function sendTokenCallContract(receiverId, amount, memo, msg) {
    return await window.tokenContract.ft_transfer_call({
        receiver_id: receiverId,
        amount: amount,
        memo: memo,
        msg: msg
    });
}

/* CHANGE METHODS on receiving contract */
export async function collectTokenTransfer(senderId, amount, msg) {
    return await window.tokenContract.ft_on_transfer({ 
        sender_id: senderId,
        amount: amount,
        msg: msg
     });
}

// Finalize an `ft_transfer_call` chain of cross-contract calls.
//
// The `ft_transfer_call` process:
//
// 1. Sender calls `ft_transfer_call` on FT contract
// 2. FT contract transfers `amount` tokens from sender to receiver
// 3. FT contract calls `ft_on_transfer` on receiver contract
// 4+. [receiver contract may make other cross-contract calls]
// N. FT contract resolves promise chain with `ft_resolve_transfer`, and may
//    refund sender some or all of original `amount`
//
// Requirements:
// * Contract MUST forbid calls to this function by any account except self
// * If promise chain failed, contract MUST revert token transfer
// * If promise chain resolves with a non-zero amount given as a string,
//   contract MUST return this amount of tokens to `sender_id`
//
// Arguments:
// * `sender_id`: the sender of `ft_transfer_call`
// * `receiver_id`: the `receiver_id` argument given to `ft_transfer_call`
// * `amount`: the `amount` argument given to `ft_transfer_call`
//
// Returns a string representing a string version of an unsigned 128-bit
// integer of how many total tokens were spent by sender_id. Example: if sender
// calls `ft_transfer_call({ "amount": "100" })`, but `receiver_id` only uses
// 80, `ft_on_transfer` will resolve with `"20"`, and `ft_resolve_transfer`
// will return `"80"`.
export function resolveTransfer(senderId, receiverId, amount) {
    return window.tokenContract.ft_resolve_transfer({ 
        sender_id: senderId,
        receiver_id: receiverId,
        amount: amount
     });
}


//Storage - https://nomicon.io/Standards/StorageManagement#reference-level-explanation
/* Returns an object with user's total and available reserved gas for transactions */
export async function getStorageBalance(accountId) {
    return await window.tokenContract.storage_balance_of({ account_id: accountId });
}

/* Returns a struct with min and max values, where min is the min amount of token required to start using the contract. Max could be null */
export async function getStorageBalanceBounds(accountId) {
    return await window.tokenContract.storage_balance_of({ account_id: accountId });
}

/* Gets the min amount of token required to successfully communicate with the contract.
*Probably a better version of the above, we only really need the min here. */
export async function getMinStorageBalance(accountId) {
    let balanceBounds = await window.tokenContract.storage_balance_of({ account_id: accountId });
    return balanceBounds.min;
}

// Payable method that receives an attached deposit of Ⓝ for a given account.
//
// If `account_id` is omitted, the deposit MUST go toward predecessor account.
// If provided, deposit MUST go toward this account. If invalid, contract MUST
// panic.
//
// If `registration_only=true`, contract MUST refund above the minimum balance
// if the account wasn't registered and refund full deposit if already
// registered.
//
// The `storage_balance_of.total` + `attached_deposit` in excess of
// `storage_balance_bounds.max` must be refunded to predecessor account.
//
// Returns the StorageBalance{total, available} showing updated balances.
export async function setStorageDeposit(accountId, registrationOnly) {
    let storageBalance = await window.tokenContract.storage_deposit({ account_id: accountId, registration_only: registrationOnly });
    return storageBalance;
}

// Withdraw specified amount of available Ⓝ for predecessor account.
//
// This method is safe to call. It MUST NOT remove data.
//
// `amount` is sent as a string representing an unsigned 128-bit integer. If
// omitted, contract MUST refund full `available` balance. If `amount` exceeds
// predecessor account's available balance, contract MUST panic.
//
// If predecessor account not registered, contract MUST panic.
//
// MUST require exactly 1 yoctoNEAR attached balance to prevent restricted
// function-call access-key call (UX wallet security)
//
// Returns the StorageBalance structure showing updated balances.
export async function storageWithdraw(amount) {
    let storageBalance = await window.tokenContract.storage_withdraw({ amount });
    return storageBalance;
}

// export async function storageUnregister(force) {} //probably won't need this
