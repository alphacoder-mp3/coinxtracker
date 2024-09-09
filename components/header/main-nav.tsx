'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Home
        </Link>
        <Link
          href="/signals"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/signals')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Signals
        </Link>
        <Link
          href="/bets"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/bets')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Bets
        </Link>
        <Link
          href="/liquidations"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/Liquidations')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Liquidations
        </Link>
        <Link
          href="/blogs"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/blogs')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Blogs
        </Link>
        <Link
          href="/contact-us"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/contact-us')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Contact Us
        </Link>
        <Link
          href="/career"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/career')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Career
        </Link>
      </nav>
    </div>
  );
}
