'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const CardTimeline = () => {
  const [currentBTCIndex, setBTCIndex] = useState(0);
  const [currentSOLIndex, setSOLIndex] = useState(0);
  const [currentETHIndex, setETHIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBTCIndex(prevIndex => (prevIndex + 1) % BTCdata.length);
      setSOLIndex(prevIndex => (prevIndex + 1) % SOLData.length);
      setETHIndex(prevIndex => (prevIndex + 1) % ETHData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    initial: {
      opacity: 0,
      x: -100,
      rotateY: -90,
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.27, 1.55], // Custom cubic-bezier curve for a bouncy effect
      },
    },
  };

  return (
    <section className="container flex justify-center items-center mt-6 gap-20">
      <motion.div
        key={BTCdata[currentBTCIndex].id}
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        <Card>
          <CardHeader>
            <CardTitle>{BTCdata[currentBTCIndex].title}</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Closing time: {BTCdata[currentBTCIndex].closeTime}
          </CardContent>
          <CardFooter>
            <Button>Bet Now</Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        key={SOLData[currentSOLIndex].id}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>{SOLData[currentSOLIndex].title}</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Closing time: {SOLData[currentSOLIndex].closeTime}
          </CardContent>
          <CardFooter>
            <Button>Bet Now</Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        key={ETHData[currentETHIndex].id}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>{ETHData[currentETHIndex].title}</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Closing time: {ETHData[currentETHIndex].closeTime}
          </CardContent>
          <CardFooter>
            <Button>Bet Now</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
};

const BTCdata = [
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
