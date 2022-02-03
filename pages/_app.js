import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import * as nearAPI from "near-api-js";
import { useState, useEffect, useCallback } from "react";
const nearConfig = {
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
  contractName: "dellwatson.testnet", //contract id, change it later
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
};
function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    _initContract();
  }, []);

  const _initContract = useCallback(async () => {
    const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
    const near = await nearAPI.connect({ keyStore, ...nearConfig });
    const walletConnection = new nearAPI.WalletConnection(near);

    const contract = await new nearAPI.Contract(
      // User's accountId as a string
      walletConnection.account(),
      // accountId of the contract we will be loading
      // NOTE: All contracts on NEAR are deployed to an account and
      // accounts can only have one contract deployed to them.
      nearConfig.contractName,
      {
        // View methods are read-only – they don't modify the state, but usually return some value
        // Change methods can modify the state, but you don't receive the returned value when called
        changeMethods: ["nft_mint"],
        // Sender is the account ID to initialize transactions.
        // getAccountId() will return empty string if user is still unauthorized
        sender: walletConnection.getAccountId(),
      }
    );

    setState({
      contract,
      nearConfig,
      // WalletConnection
    });
  }, []);

  return (
    <ThemeProvider attribute="class">
      {!!state && (
        <Component
          {...pageProps}
          {...{
            contract: state?.contract,
            nearConfig: state?.nearConfig,
            // WalletConnection: state?.WalletConnection,
          }}
        />
      )}
    </ThemeProvider>
  );
}

export default MyApp;
