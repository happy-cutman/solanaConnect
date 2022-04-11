import React from 'react';
import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import WalletsModal from './components/WalletsModal/WalletsModal'
import { useWallets } from './hooks/useWallets';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  const {wallets, endpoint} = useWallets()

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <div className="App">
          <header className="App-header">
            <WalletsModal/>            
          </header>
        </div>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
