import { useWallet } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { useEffect, useState } from 'react';


const createConnection = (url = clusterApiUrl('devnet')) => {
    return new Connection(url);
  }

export const useAccountInfo = () => {
  const [balance, setBalance] = useState()
  const [walletAddress, setWalletAddress] = useState()
  const { publicKey } = useWallet();

  const connection = createConnection();

  useEffect(() => {
    (async () => {
      if (publicKey) {
        await connection.getBalance(publicKey).then(balance => setBalance(balance))
        setWalletAddress(publicKey.toString())
      }
    })();
  }, [connection, publicKey])
  
  return { balance, walletAddress }
}