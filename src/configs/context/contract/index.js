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

import React, { createContext, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import {useDsWallet} from "configs/context/wallet";
import { useGlobal } from "../global";
// abis
import TFTAirDropAbi from "configs/context/contract/abi/TFTAirDrop.json";
// web3
import { dsWeb3GetContract } from "libs/ds-lib/ds-web3";
import { dsWeb3SendTransaction } from "libs/ds-lib/ds-web3";

export const ContractContext = createContext();
export function ContractProvider({children}) {
  const wallet = useDsWallet();
  const {TARGET_NET} = useGlobal();

  const TFTAirdropRegister = useCallback(async() => {
    const contract = dsWeb3GetContract(wallet.provider, TARGET_NET.contracts.airdrop, TFTAirDropAbi.abi);
    const transaction = contract.methods.register();
    return dsWeb3SendTransaction(wallet.provider, null, wallet.account, transaction);
  }, [wallet.account]);

  return(
    <ContractContext.Provider
      value = {{
        TFTAirdropRegister,
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export const useContract = () => {
  const contract = useContext(ContractContext);
  return contract;
}

ContractProvider.propTypes = {
  children: PropTypes.node
}