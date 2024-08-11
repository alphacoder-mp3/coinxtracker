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
          href="/exchanges"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/exchanges')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Exchanges
        </Link>
        <Link
          href="/journal"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/journal')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Journal
        </Link>
        <Link
          href="/openinterest"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/openinterest')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Open Interest
        </Link>
        <Link
          href="/options"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/options')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Options
        </Link>
        <Link
          href="/fundingrate"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/fundingrate')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Funding Rate
        </Link>
        <Link
          href="/liquidation"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/liquidation')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Liquidation
        </Link>
        <Link
          href="/longshort"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/longshort')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Long/Short
        </Link>
        <Link
          href="/etfs"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/etfs')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          ETFs
        </Link>
        <Link
          href="/data"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/data')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Data
        </Link>
        <Link
          href="/supercharts"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/supercharts')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Supercharts
        </Link>
      </nav>
    </div>
  );
}
