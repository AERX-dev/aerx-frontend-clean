import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import ChangeLanguage from "./ChangeLanguage";
import * as nearAPI from "near-api-js";
import { useState, useEffect, useCallback } from "react";

// refactor
const nearConfig = {
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
  contractName: "dellwatson.testnet", //contract id, change it later
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
};

export default function Menu({ toggled, setToggled }) {
  const { asPath } = useRouter();
  const { t, lang } = useTranslation("common");

  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    getWallet();
  }, []);

  // refactor to hooks
  const getWallet = useCallback(async () => {
    const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
    const near = await nearAPI.connect({ keyStore, ...nearConfig });
    const walletConnection = new nearAPI.WalletConnection(near);
    setWallet(walletConnection);

    if (walletConnection.getAccountId()) {
      console.log(walletConnection, "walletConnection");
      setUser({
        // Gets the accountId as a string
        accountId: walletConnection.getAccountId(),
        // Gets the user's token balance
        // balance: (await walletConnection.account().state()).amount,
      });
    }
  }, []);

  const signIn = () => {
    wallet.requestSignIn(
      {
        contractId: nearConfig.contractName,
      }, //contract requesting access
      "NEAR AERX", //optional name
      null, //optional URL to redirect to if the sign in was successful
      null //optional URL to redirect to if the sign in was NOT successful
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <div
      className={`ml-2 md:ml-[142px] md:flex md:items-center w-full ${
        toggled ? "" : "hidden"
      }`}
    >
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "welcome" }}>
          <a
            className={`${
              asPath === "/#welcome" || asPath === "/" || asPath === "/#"
                ? "no-underline font-bold nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkHome")}
          </a>
        </Link>
      </div>
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "features" }}>
          <a
            className={`${
              asPath === "/#features"
                ? "no-underline font-bold nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkFeatures")}
          </a>
        </Link>
      </div>
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "aboutUs" }}>
          <a
            className={`${
              asPath === "/#aboutUs"
                ? "no-underline font-bold nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkAboutUs")}
          </a>
        </Link>
      </div>

      <div className="hidden md:block">
        <ChangeLanguage />
      </div>
      {/* TODO: change translation */}

      {!user ? (
        <div className="p-2 mt-4 ml-auto" onClick={signIn}>
          <a className="btn-login">Connect Wallet</a>
        </div>
      ) : (
        <>
          <div className="p-2 mt-4 ml-auto" onClick={signOut}>
            <a className="btn-login">Logout Wallet</a>
          </div>
        </>
      )}
      <br />
      <div>
        {/* UPDATE: UI shows network, display name */}
        {wallet && <div>Hello {wallet?._authData?.accountId}</div>}
        <br />
        <p>Network: testnet</p>
      </div>
    </div>
  );
}
