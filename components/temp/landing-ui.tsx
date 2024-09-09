import Image from 'next/image';
import { TypedWords } from '@/components/temp/typed-words';
import { Spotlight } from '@/components/ui/spot-light';
import { ContactUsCard } from '@/components/contact-us-card';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

export const LandingPage = () => {
  return (
    <main className="h-svh w-full min-h-svh flex justify-center items-center flex-col">
      {/* <BackgroundBeamsWithCollision className="min-h-svh flex justify-center items-center flex-col"> */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#6d28d9"
      />
      <div className="dark:bg-black bg-white flex items-center justify-center">
        <Image
          className="h-auto w-auto"
          src="/images/coinXtracker.jpg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <TypedWords />
      </div>
      <ContactUsCard />
      {/* </BackgroundBeamsWithCollision> */}
    </main>
  );
};
