'use client';
import { Typewriter } from 'react-simple-typewriter';

export const TypedWords = () => {
  return (
    <div className="text-xl sm:text-4xl font-serif bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-black px-2">
      <Typewriter
        words={['is for you', 'is secure', 'is coming...']}
        loop={1}
        typeSpeed={20}
        deleteSpeed={20}
      />
    </div>
  );
};
