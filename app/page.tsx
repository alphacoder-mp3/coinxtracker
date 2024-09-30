// import { BannerCard } from '@/components/banner-card';
import { CardTimeline } from '@/components/card-timeline';
import { SiteHeader } from '@/components/header/site-header';
import { TopHeader } from '@/components/header/top-header';
import { Separator } from '@/components/ui/separator';
import { Footer } from '@/components/footer/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <TopHeader />
      <Separator className="w-screen" />
      <SiteHeader />
      <Separator className="w-screen" />
      <CardTimeline />
      {/* <BannerCard /> */}
      <Footer />
    </main>
  );
}
