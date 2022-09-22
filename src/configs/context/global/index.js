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
 import { UseWalletProvider } from "use-wallet";
 import {TARGET_NET} from "configs/config";
 
 const POLLING_INTERVAL = 12000
 export const GlobalContext = createContext();
 export const GlobalProvider = ({children}) => {
   return(
     <React.StrictMode>
       <UseWalletProvider
         chainId={TARGET_NET.chainId}
         connectors={{
           injected: {
             chainId: [TARGET_NET.chainId,],
             rpc: {
               [TARGET_NET.chainId]: TARGET_NET.rpc
             }
           },
           walletconnect: {
             rpc: {
               [TARGET_NET.chainId]: TARGET_NET.rpc
             },
             bridge: 'https://bridge.walletconnect.org',
             pollingInterval: POLLING_INTERVAL,
           }
         }}
       >
         <GlobalContext.Provider value={{TARGET_NET}}>
           {children}
         </GlobalContext.Provider>
       </UseWalletProvider>
     </React.StrictMode>
   )
 }
 
 export const useGlobal = () => {
   const globalData = useContext(GlobalContext);
   return globalData;
 }

 GlobalProvider.defaultProps = {
   children: undefined
 };

 GlobalProvider.propTypes = {
   children: PropTypes.node
 }