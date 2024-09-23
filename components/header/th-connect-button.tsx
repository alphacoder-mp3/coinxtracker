'use client';
import { Button } from '@/components/ui/button';


import { ethers, BrowserProvider, JsonRpcSigner } from 'ethers';

// Extend the Window interface
declare global {
  interface Window {
    ethereum?: ethers.Eip1193Provider;
  }
}

async function connectToMetaMask(): Promise<{ provider: BrowserProvider; signer: JsonRpcSigner; address: string } | undefined> {
  // Check if MetaMask is installed
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Create a new BrowserProvider instance
      const provider = new BrowserProvider(window.ethereum);
      
      // Get the signer
      const signer = await provider.getSigner();
      
      // Get the connected wallet address
      const address = await signer.getAddress();
      
      console.log('Connected to MetaMask');
      console.log('Wallet address:', address);
      
      return { provider, signer, address };
    } catch (error) {
      console.error('Failed to connect to MetaMask:', error);
    }
  } else {
    console.error('MetaMask is not installed');
  }
}

// Usage
connectToMetaMask().then((result) => {
  if (result) {
    const { provider, signer, address } = result;
    // You can now use provider, signer, and address in your dApp
  }
});

export const TopHeaderConnectButton = () => {
  return (
    <Button className="bg-orange-700 dark:text-white hover:bg-slate-700" onClick={ connectToMetaMask }>
      {' '}
      Connect
    </Button>
  );
  // return <w3m-button />;
  
};
