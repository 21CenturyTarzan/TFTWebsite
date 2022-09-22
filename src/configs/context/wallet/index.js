/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by DavidSparker
 * 
 **************************************************************
 */

import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { dsWalletConnectInjected } from "libs/ds-lib/ds-web3";
import { useWallet } from "use-wallet";
import { useGlobal } from "configs/context/global";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const wallet = useWallet();
  const { TARGET_NET } = useGlobal();

  async function connectWallet(connector) {
    if (connector === "injected") {
      await dsWalletConnectInjected(TARGET_NET, connector);
      wallet.connect();
    }
    else
      wallet.connect(connector);
  }

  function isConnected() {
    return wallet.isConnected()
  }

  return (
    <WalletContext.Provider
      value={{
        provider: wallet.ethereum,
        account: wallet.account,
        walletStat: wallet.status,
        connectWallet,
        isConnected
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useDsWallet = () => {
  const walletData = useContext(WalletContext);
  return walletData;
}

WalletProvider.defaultProps = {
  children: undefined
};

WalletProvider.propTypes = {
  children: PropTypes.node
};