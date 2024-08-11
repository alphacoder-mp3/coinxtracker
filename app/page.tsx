import { SiteHeader } from '@/components/header/site-header';
import { TopHeader } from '@/components/header/top-header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <TopHeader />
      <SiteHeader />
    </main>
  );
}
