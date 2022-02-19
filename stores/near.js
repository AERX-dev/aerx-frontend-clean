import create from 'zustand'

const nearStore = create(set => ({
  connection: null,
  setConnection: ( connection ) => set(state => ({ connection })),
  removeConnection: () => set(state => ({ connection: null })),
  
  walletConnection: null, 
  setWalletConnection: ( walletConnection ) => set(() => ({ walletConnection: walletConnection })),
  removeWalletConnection: () => set(state => ({ walletConnection: null })),

  accountId: null, 
  setAccountId: ( accountId ) => set(state => ({ accountId })),
  removeAccountId: () => set(state => ({ accountId: null })),

  tokenContract: null, 
  setTokenContract: ( tokenContract ) => set(state => ({ tokenContract })),
  removeTokenContract: () => set(state => ({ tokenContract: null })),

  nftContract: null, 
  setNFTContract: ( nftContract ) => set(state => ({ nftContract })),
  removeNFTContract: () => set(state => ({ nftContract: null })),
}))

export { nearStore }