import Image from 'next/image';
import { TypedWords } from '@/components/temp/typed-words';

export const TempLandingUI = () => {
  return (
    <main className="flex h-svh justify-center items-center">
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
