// import { BannerCard } from '@/components/banner-card';
import { CardTimeline } from '@/components/card-timeline';
import { SiteHeader } from '@/components/header/site-header';
import { TopHeader } from '@/components/header/top-header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2 container">
      <TopHeader />
      <SiteHeader />
      <CardTimeline />
      {/* <BannerCard /> */}
    </main>
  );
}
