import {
    connect,
    Account,
    Connection,
    InMemorySigner,
    KeyPair,
    WalletAccount,
    Contract,
    WalletConnection,

    keyStores,
    transactions,
    utils,
    providers,

} from 'near-api-js';

import getConfig from './config'

import { nearStore } from '../stores/near';

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// Initialize contract & set global variables
export async function initNearConnection( state ) {

    const connection = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))
    state.setConnection(connection);
    window.nearConnection = connection;

    const walletConnection = new WalletConnection(connection);
    window.walletConnection = walletConnection;
    state.setWalletConnection(walletConnection);

    window.accountId = window.walletConnection.getAccountId()

    // Initializing our contract APIs by contract name and configuration
    window.contract = await new Contract(walletConnection.account(), nearConfig.contractName, {
        // View methods are read only. They don't modify the state, but usually return some value.
        // viewMethods: ['get_greeting'],
        // Change methods can modify the state. But you don't receive the returned value when called.
        // changeMethods: ['set_greeting'],
    })



}

export function logout( state ) {
    // reset store
    window.walletConnection.signOut()
    
    // window.removeConnection();
    // window.removeWalletConnection();

    // reload page
    window.location.replace(window.location.origin)
}

export function login( state ) {
    window.walletConnection.requestSignIn(nearConfig.contractName, "Example App", "http://localhost:3000/account", "http://YOUR-URL.com/failure");
}
