/***********************************************************************************
 * Core: https://nomicon.io/Standards/NonFungibleToken/Core#nft-interface
 * "CHANGE", "VIEW" methods
************************************************************************************/

//Transfer token with tokenId to receiverId, returns {}
export function sendNFT(state, receiverId, tokenId, approvalId = null, memo = null) {
    state.nftContract.nft_transfer({
        receiver_id: receiverId,
        token_id: tokenId,
        approval_id: approvalId,
        memo: memo
    });
}

//https://nomicon.io/Standards/NonFungibleToken/Core#nft-interface, returns a Promise
export async function transferNFTCall(state, receiverId, tokenId, msg, approvalId = null, memo = null) {
    return await state.nftContract.nft_transfer_call({
        receiver_id: receiverId,
        token_id: tokenId,
        approval_id: approvalId,
        memo: memo,
        msg: msg
    });
}

// Returns the token object with the given `token_id` or `null` if no such token.
export function getNFTToken(state, tokenId) {
    return state.nftContract.nft_token({
        token_id: tokenId,
    });
}
/***********************************************************************************
 * Approval: https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement#interface
 * "CHANGE" methods
************************************************************************************/
/***********************************************************************************
 * "VIEW" methods
************************************************************************************/

/***********************************************************************************
 * Enumeration: https://nomicon.io/Standards/NonFungibleToken/Enumeration#interface
 * "VIEW"-only methods below
************************************************************************************/

/*Returns the total supply of non-fungible tokens as a string */
export function getTotalNFTSupply(state) {
    return state.nftContract.nft_total_supply()
}

// Get a list of all tokens, Returns an array of Token objects
export function getNFTTokenList(state, fromIndex = null, limit = null) {
    return state.nftContract.nft_tokens({ from_index: fromIndex, limit: limit });
}

// Get number of tokens owned by a given account
// Returns the number of non-fungible tokens owned by given `account_id` as a string
export function getUserNFTSupply(state, accountId) {
    return state.nftContract.nft_supply_for_owner({ account_id: accountId });
}

// Get a list of all tokens owned by accountId, Returns an array of Token objects.
// fromIndex & limit parameters are optional, defaults are 0 and unlimited (i.e. all tokens)
export function getUserNFTTokenList(state, accountId, fromIndex = null, limit = null) { //todo: hopefully it's gonna work with 'null', check back here if errors.
    return state.nftContract.nft_tokens_for_owner({ account_id: accountId, from_index: fromIndex, limit: limit });
}
