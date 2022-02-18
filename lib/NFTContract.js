export function getTotalNFTSupply(state) {
    return state.nftContract.nft_total_supply()
}