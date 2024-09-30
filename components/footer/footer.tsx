import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full mt-10 border-t py-6 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center gap-24">
        <div className="flex items-center space-x-4 flex-col space-y-20">
          <Image
            src={siteConfig.siteLogo}
            height={300}
            width={300}
            alt="COINXTRACKER LOGO"
            className="h-12 w-auto rounded-md"
          />
          <p className="text-sm">
            &copy; 2024 CoinXTracker, all rights reserved
          </p>
        </div>

        <div className="flex flex-wrap gap-10 text-sm md:text-base">
          <section className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">About</h4>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </section>

          <section className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Products</h4>
            <Link href="/products/app" className="hover:underline">
              Crypto APP
            </Link>
            <Link href="/products/api" className="hover:underline">
              Crypto API
            </Link>
            <Link href="/products/chart" className="hover:underline">
              Crypto Chart
            </Link>
            <Link href="/learning" className="hover:underline">
              Learning Center
            </Link>
          </section>

          <section className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Donations</h4>
            <span>
              BTC:{' '}
              <Link href="/donate/btc" className="hover:underline">
                Donate
              </Link>
            </span>
            <span>
              ETH:{' '}
              <Link href="/donate/eth" className="hover:underline">
                Donate
              </Link>
            </span>
            <span>
              USDT:{' '}
              <Link href="/donate/usdt" className="hover:underline">
                Donate
              </Link>
            </span>
          </section>

          <section className="flex flex-col space-y-2">
            <h4 className="font-semibold text-lg">Community</h4>
            <Link
              href="https://twitter.com/CoinXTracker"
              target="_blank"
              className="hover:underline"
            >
              Twitter
            </Link>
            <Link
              href="https://t.me/CoinXTracker"
              target="_blank"
              className="hover:underline"
            >
              Telegram
            </Link>
          </section>
        </div>
      </div>
    </footer>
  );
}
