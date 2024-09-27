'use client';

import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, arbitrum } from '@reown/appkit/networks';

// 1. Get projectId at https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;

// 2. Set Ethers adapters
const ethersAdapter = new EthersAdapter();

// 3. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'http://localhost:3000', // origin must match your domain & subdomain
  icons: ['http://localhost:3000'],
};

// 4. Create the AppKit instance
createAppKit({
  adapters: [ethersAdapter],
  metadata: metadata,
  networks: [mainnet, arbitrum],
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: true, // default to true
    socials: [
      'google',
      'x',
      'github',
      'discord',
      'apple',
      'facebook',
      'farcaster',
    ],
    emailShowWallets: true, // default to true
  },
  allWallets: 'SHOW',
});

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
