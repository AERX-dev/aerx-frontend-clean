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

const keyStore = new keyStores.BrowserLocalStorageKeyStore();
const nearConfig = getConfig(process.env.NODE_ENV || 'development');

// Initialize contract & set global variables
export async function initNearConnection(state) {

    const nearConnection = await connect(Object.assign({ deps: { keyStore: keyStore } }, nearConfig));
    window.nearConnection = nearConnection;
    state.setConnection(nearConnection);

    const walletConnection = new WalletConnection(nearConnection);
    window.walletConnection = walletConnection;
    state.setWalletConnection(walletConnection);

    window.accountId = window.walletConnection.getAccountId();

    //set our contracts.
    await loadTokenContract(walletConnection, state);
    await loadNFTContract(walletConnection, state);
}

// Initializing our token contract APIs by contract name and configuration
async function loadTokenContract(walletConnection, state) {
    window.tokenContract = await new Contract(walletConnection.account(), TOKEN_CONTRACT_NAME, {
        viewMethods: ['ft_total_supply', 'ft_balance_of',
        'storage_balance_bounds', 'storage_balance_of'],
        changeMethods: ['new_default_meta', 'new', //public methods defined in our contract
        'ft_transfer', 'ft_transfer_call', 'ft_on_transfer','ft_resolve_transfer', //FungibleTokenCore, docs: https://nomicon.io/Standards/FungibleToken/Core#reference-level-explanation
        'storage_deposit', 'storage_withdraw', 'storage_unregister'], //https://nomicon.io/Standards/StorageManagement#reference-level-explanation
    });
    state.setTokenContract(window.tokenContract);
    console.log(window.tokenContract);
    console.log(state);
}

//TODO: needs to be finished, add methods, add a wrapper.
async function loadNFTContract(walletConnection, state) {
    // console.log(walletConnection);
    // Initializing our contract APIs by contract name and configuration
    window.NFTContract = await new Contract(walletConnection.account(), NFT_CONTRACT_NAME, {
        // View methods are read only. They don't modify the state, but usually return some value.
        viewMethods: ['get_num'],
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: ['new_default_meta', 'new', 'nft_mint', ],
    });
    state.setNFTContract(window.NFTContract);
    // console.log(window.NFTContract);
}

export function logout(state) {
    // reset store
    window.walletConnection.signOut()

    state.removeConnection();
    state.removeWalletConnection();

    // reload page
    window.location.replace(window.location.origin)
}

export async function loginToken(state) {
    await state.walletConnection.requestSignIn(TOKEN_CONTRACT_NAME, "", "http://localhost:3000/account", ""); //todo: convert this to relative URL OR put in a env/const somewhere
    //todo: also maybe have a second URL like with like 404 or 401 / error page.
    // console.log("end login token");
}

//UNDER CONSTRUCTION:
// export async function loginNFT(state) {
//     console.log("start login nft");
//     console.log(NFT_CONTRACT_NAME);
//     await window.walletConnection.requestSignIn(NFT_CONTRACT_NAME, "", "", ""); //todo: convert this to relative URL OR put in a env/const somewhere
//     console.log("end login nft");
// }

//TODO: finish sign-in/sign-out & add contract view & change functions to def. 
//add sender acc object(figure where to get it from) & create wrapper functions around smart contract functions, in a separate file, perhaps
//generate the keys
