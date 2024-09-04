'use client';
import { useState, useEffect, useRef, TouchEvent } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type BTCDataType = {
  title: string;
  closeTime: string;
  id: number;
};

const BTCdata: BTCDataType[] = [
  {
    title: 'BTC Bet [Daily]',
    closeTime: '4hrs',
    id: 1,
  },
  {
    title: 'BTC Bet [Weekly]',
    closeTime: '3hrs',
    id: 2,
  },
  {
    title: 'BTC Bet [Monthly]',
    closeTime: '3hrs',
    id: 3,
  },
];

const SOLData = [
  {
    title: 'SOL Bet [Daily]',
    closeTime: '4hrs',
    id: 4,
  },
  {
    title: 'SOL Bet [Weekly]',
    closeTime: '3hrs',
    id: 5,
  },
  {
    title: 'SOL Bet [Monthly]',
    closeTime: '3hrs',
    id: 6,
  },
];

const ETHData = [
  {
    title: 'ETH Bet [Daily]',
    closeTime: '4hrs',
    id: 7,
  },
  {
    title: 'ETH Bet [Weekly]',
    closeTime: '3hrs',
    id: 8,
  },
  {
    title: 'ETH Bet [Monthly]',
    closeTime: '3hrs',
    id: 9,
  },
];

export const BannerCard = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  const handlePrevCard = () => {
    setCurrentCard(prevCard =>
      prevCard === 0 ? BTCdata.length - 1 : prevCard - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCard(prevCard =>
      prevCard === BTCdata.length - 1 ? 0 : prevCard + 1
    );
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    touchEndRef.current = event.touches[0].clientX;
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
      const touchDistance = touchEndRef.current - touchStartRef.current;
      const halfwayTranslate = -(currentCard * 100) + touchDistance / 2;
      sliderRef.current.style.transform = `translateX(${halfwayTranslate}%)`;
    }
  };

  const handleTouchEnd = () => {
    const touchDistance = touchEndRef.current - touchStartRef.current;
    if (touchDistance < -50) {
      handleNextCard();
    } else if (touchDistance > 50) {
      handlePrevCard();
    }
    touchStartRef.current = 0;
    touchEndRef.current = 0;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextCard();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentCard]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease';
      sliderRef.current.style.transform = `translateX(-${currentCard * 100}%)`;
    }
  }, [currentCard]);

  return (
    <div
      className="relative overflow-hidden container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex w-full transition-transform duration-300 ease"
        ref={sliderRef}
      >
        {BTCdata.map(item => (
          <Card key={item.id} className="flex-shrink-0 w-full">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>Closing time: {item.closeTime}</CardContent>
            <CardFooter>
              <Button>Bet Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div
        className="flex w-full transition-transform duration-300 ease"
        // ref={sliderRef}
      >
        {SOLData.map(item => (
          <Card key={item.id} className="flex-shrink-0 w-full">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>Closing time: {item.closeTime}</CardContent>
            <CardFooter>
              <Button>Bet Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {ETHData.map(item => (
        <Card key={item.id} className="flex-shrink-0 w-full">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>Closing time: {item.closeTime}</CardContent>
          <CardFooter>
            <Button>Bet Now</Button>
          </CardFooter>
        </Card>
      ))}
      <div className="flex justify-center mt-2">
        {BTCdata.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer ${
              index === currentCard ? 'bg-blue-500' : ''
            }`}
            onClick={() => setCurrentCard(index)}
          />
        ))}
      </div>
    </div>
  );
};
