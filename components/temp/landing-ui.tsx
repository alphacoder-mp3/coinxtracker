import Image from 'next/image';
import { TypedWords } from '@/components/temp/typed-words';
import { Spotlight } from '@/components/ui/spot-light';

export const TempLandingUI = () => {
  return (
    <main className="flex h-svh justify-center items-center">
      <div className="h-full w-full dark:bg-black bg-white  relative flex items-center justify-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#6d28d9"
        />
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
    </main>
  );
};
