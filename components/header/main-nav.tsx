'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { useMounted } from '@/hooks/use-mounted';

export function MainNav() {
  const pathname = usePathname();
  const mounted = useMounted();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        {!mounted ? (
          <>
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold lg:inline-block">
              {siteConfig.name}
            </span>
          </>
        ) : (
          <Image
            src={siteConfig.siteLogo}
            height={120}
            width={120}
            alt="Coinxtracker Logo"
            className="h-fit w-fit"
          />
        )}
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Home
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/components') &&
              !pathname?.startsWith('/docs/component/chart')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Exchanges
        </Link>
        <Link
          href="/blocks"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/blocks')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Journal
        </Link>
        <Link
          href="/charts"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/component/chart') ||
              pathname?.startsWith('/charts')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Open Interest
        </Link>
        <Link
          href="/themes"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/themes')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Options
        </Link>
        <Link
          href="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Funding Rate
        </Link>
        <Link
          href="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Liquidation
        </Link>
        <Link
          href="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Long/Short
        </Link>
        <Link
          href="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          ETFs
        </Link>
        <Link
          href="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Data
        </Link>
        <Link
          href="/examples"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
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
