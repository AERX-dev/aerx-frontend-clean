import { nearStore } from '../stores/near';

// afaik this has to be run just once the contract has been deployed and before it's used
// I've already ran this on our contract with the token value of 1000000000 - that's our current total supply
// Accepts accountID & totalSupply of token that you wanna create. accountID gets all tokens.
function initTheContractDefault(accountId, totalSupply) {
    return await window.contract.new_default_meta(({ owner_id: accountId,  total_supply: totalSupply}));
}

//Returns the total number of tokens that exist in circulation
export async function getTotalSupply() {
    return await window.contract.ft_total_supply();
}

//Returns the number of tokens the user has
export async function getBalance(accountId) {
    return await window.contract.ft_balance_of({account_id: accountId});
}

//Storage - https://nomicon.io/Standards/StorageManagement#reference-level-explanation
/* Returns an object with user's total and available reserved gas for transactions */
export async function getStorageBalance(accountId) {
    return await window.contract.storage_balance_of({account_id: accountId});
}

/* Returns a struct with min and max values, where min is the min amount of token required to start using the contract. Max could be null */
export async function getStorageBalanceBounds(accountId) {
    return await window.contract.storage_balance_of({account_id: accountId});
}

/* Gets the min amount of token required to successfully communicate with the contract.
*Probably a better version of the above, we only really need the min here. */
export async function getMinStorageBalance(accountId) {
    let balanceBounds = await window.contract.storage_balance_of({account_id: accountId});
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
    let storageBalance = await window.contract.storage_deposit({account_id: accountId, registration_only: registrationOnly});
    return storageBalance;
}