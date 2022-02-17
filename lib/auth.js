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

import getConfig, { NFT_CONTRACT_NAME, TOKEN_CONTRACT_NAME } from './config'
import { nearStore } from '../stores/near';
import { keyStores } from 'near-api-js';

const keyStore = new keyStores.BrowserLocalStorageKeyStore();
const nearConfig = getConfig(process.env.NODE_ENV || 'development', keyStore);

// Initialize contract & set global variables
export async function initNearConnection(state) {

    const connection = await connect(/*Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },*/ nearConfig);//)
    window.nearConnection = connection;
    state.setConnection(connection);


    const walletConnection = new WalletConnection(connection);
    window.walletConnection = walletConnection;
    state.setWalletConnection(walletConnection);

    window.accountId = window.walletConnection.getAccountId();

    //set our contracts.
    loadTokenContract(walletConnection);
    loadNFTContract(walletConnection);
}

function loadTokenContract(walletConnection) {
    // Initializing our contract APIs by contract name and configuration
    window.tokenContract = await new Contract(walletConnection.account(), TOKEN_CONTRACT_NAME, {
        // View methods are read only. They don't modify the state, but usually return some value.
        viewMethods: ['get_greeting'],
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: ['set_greeting'],
        sender: account//todo: add acc object
    });
}

function loadNFTContract(walletConnection) {
    // Initializing our contract APIs by contract name and configuration
    window.NFTContract = await new Contract(walletConnection.account(), NFT_CONTRACT_NAME, {
        // View methods are read only. They don't modify the state, but usually return some value.
        viewMethods: ['get_greeting'],
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: ['set_greeting'],
        sender: account//todo: add acc object
    });
}

export function logout(state) {
    // reset store
    window.walletConnection.signOut()

    state.removeConnection();
    state.removeWalletConnection();

    // reload page
    window.location.replace(window.location.origin)
}

export function login(state) {
    window.walletConnection.requestSignIn(nearConfig.contractName, "Example App", "http://localhost:3000/account", "http://YOUR-URL.com/failure");
}


//TODO: finish sign-in/sign-out & add contract view & change functions to def. 
//add sender acc object(figure where to get it from) & create wrapper functions around smart contract functions, in a separate file, perhaps
