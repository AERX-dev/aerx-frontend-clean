import create from 'zustand'

const nearStore = create(set => ({
  connection: null,
  setConnection: ( connection ) => set(state => ({ connection })),
  removeConnection: () => set(state => ({ connection: null })),
  
  walletConnection: null, 
  setWalletConnection: ( walletConnection ) => set(state => ({ walletConnection })),
  removeWalletConnection: () => set(state => ({ walletConnection: null })),
}))

export { nearStore }