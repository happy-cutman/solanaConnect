import React from 'react'
import {WalletModalProvider, WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import { useAccountInfo } from '../../hooks/useAccountInfo';


const WalletsModal = () => {
  const {balance, walletAddress} = useAccountInfo()
  console.log('%c walletBalance', 'color: greenyellow', balance)
  console.log('%c walletAddress', 'color: yellow', walletAddress)

  return (
    <WalletModalProvider>
      <WalletMultiButton />
      {/* <WalletDisconnectButton />/ */}
    </WalletModalProvider>
  )
}

export default WalletsModal