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

import React, { useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types';
import {
  WalletConnectContainer
} from './styles'

export const TFTWalletConnect = (props) => {
  const { close } = props;

  const ht = useRef();

  const handleMetamaskConnect = () => {
    props.walletConnect('injected')
    close && close();
  }

  // const handleCoinbaseConnect = () => {
  //   props.walletConnect('coinbase')
  //   close && close();
  // }
  const handleWalletConnect = () => {
    props.walletConnect('walletconnect')
    close && close();
  }

  const handleClickOutside = useCallback((e) => {
    const outSideMenu = !ht.current?.contains(e.target)
    if (outSideMenu) {
      close && close();
    }
  }, [close])

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [handleClickOutside])

  return (
    <WalletConnectContainer >
      <div className='wallet-frame' ref={ht}>
        <div className='one-wallet top-radius' onClick={handleMetamaskConnect}>
          <div className='wallet-caption'>
            <img src={require("assets/images/brands/metamask.png")} alt='metamask' width='36px' height='36px' />
            <div className='wallet-label'>Metamask</div>
          </div>
          <div className='wallet-description'>Connect to your MetaMask Wallet</div>
        </div>
        {/* <div className='one-wallet' onClick={handleCoinbaseConnect}>
          <div className='wallet-caption'>
            <img src="images/coinbase.png" alt='metamask' width='36px' height='36px' />
            <div className='wallet-label'>CoinBase</div>
          </div>
          <div className='wallet-description'>Connect to your coinbase Wallet</div>
        </div> */}
        <div className='one-wallet bottom-radius' onClick={handleWalletConnect}>
          <div className='wallet-caption'>
            <img src={require("assets/images/brands/trustwallet.png")} alt='metamask' width='36px' height='36px' />
            <div className='wallet-label'>WalletConnect</div>
          </div>
          <div className='wallet-description'>Scan with WalletConnect to connect</div>
        </div>
      </div>
    </WalletConnectContainer>
  )
}

TFTWalletConnect.propTypes = {
  close: PropTypes.func,
  walletConnect: PropTypes.func,
};
