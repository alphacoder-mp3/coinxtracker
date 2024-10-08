import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/components/theme-provider';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { LandingPage } from '@/components/temp/landing-ui';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

import { headers } from 'next/headers'; // added

import { AppKitProvider } from '@/context/web3modal';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Akshay Shinde',
      url: 'https://akshayshinde.com',
    },
  ],
  creator: 'Akshay Shinde',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@folklore69_',
  },
  icons: {
    icon: siteConfig.ogImage,
    shortcut: siteConfig.ogImage,
    apple: siteConfig.ogImage,
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = headers().get('cookie');
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppKitProvider>
            <BackgroundBeamsWithCollision
              className="min-h-svh"
              classNameforBeam="dark:block hidden"
            >
              {process.env.NEXT_DEV_MODE !== 'PROD' ? (
                children
              ) : (
                <LandingPage />
              )}
            </BackgroundBeamsWithCollision>
            <TailwindIndicator />
          </AppKitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
