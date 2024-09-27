'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { ethers, BrowserProvider, Eip1193Provider } from 'ethers';

type EthereumProvider = Eip1193Provider & {
  on(event: string, listener: (...args: any[]) => void): void;
  removeListener(event: string, listener: (...args: any[]) => void): void;
  request(args: { method: string; params?: any[] }): Promise<any>;
};

const networkNames: { [key: string]: string } = {
  '1': 'Ethereum Mainnet',
  '5': 'Goerli Testnet',
  '11155111': 'Sepolia Testnet',
  '42161': 'Arbitrum One',
  '421613': 'Arbitrum Goerli',
  '421614': 'Arbitrum Sepolia',
  // Add more networks as needed
};

export const WalletInfo: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [network, setNetwork] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const resetWalletState = () => {
    setAddress(null);
    setBalance(null);
    setNetwork(null);
    setIsConnected(false);
    setError(null);
  };

  const connectWallet = async () => {
    const ethereum = window.ethereum as EthereumProvider | undefined;
    if (ethereum) {
      try {
        // This will prompt MetaMask if not connected
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        if (accounts.length > 0) {
          const provider = new BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          const balance = await provider.getBalance(address);
          const network = await provider.getNetwork();

          setAddress(address);
          setBalance(ethers.formatEther(balance));
          setNetwork(
            networkNames[network.chainId.toString()] ||
              `Unknown Network (Chain ID: ${network.chainId})`
          );
          setError(null);
          setIsConnected(true);
        } else {
          throw new Error('No accounts found');
        }
      } catch (err) {
        console.error('Failed to connect wallet:', err);
        setError('Failed to connect wallet. Please try again.');
        resetWalletState();
      }
    } else {
      setError('Please install MetaMask');
    }
  };

  const disconnectWallet = useCallback(() => {
    resetWalletState();
  }, []);

  useEffect(() => {
    const ethereum = window.ethereum as EthereumProvider | undefined;
    if (ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected their wallet
          disconnectWallet();
        } else {
          // Account changed, prompt reconnection
          resetWalletState();
        }
      };

      const handleChainChanged = () => {
        // Chain changed, prompt reconnection
        resetWalletState();
      };

      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('chainChanged', handleChainChanged);

      return () => {
        ethereum.removeListener('accountsChanged', handleAccountsChanged);
        ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, [disconnectWallet]);

  return (
    <div className="max-w-sm rounded-xl shadow-md">
      {error && <p className="text-red-500">{error}</p>}
      {isConnected ? (
        <>
          <p className="text-gray-700">
            <span className="font-semibold">Address:</span> {address}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Balance:</span> {balance} ETH
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Network:</span> {network}
          </p>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2  text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Disconnect Wallet
          </button>
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};
