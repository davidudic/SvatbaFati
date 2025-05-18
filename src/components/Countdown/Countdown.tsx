'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import styles from './Countdown.module.css';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate);

    const calculateTimeLeft = () => {
      const now = new Date();
      
      if (target <= now) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = differenceInDays(target, now);
      const hours = differenceInHours(target, now) % 24;
      const minutes = differenceInMinutes(target, now) % 60;
      const seconds = differenceInSeconds(target, now) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdownItem}>
        <motion.div 
          className={styles.number}
          key={timeLeft.days}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft.days}
        </motion.div>
        <div className={styles.label}>Dnů</div>
      </div>
      <div className={styles.countdownItem}>
        <motion.div 
          className={styles.number}
          key={timeLeft.hours}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft.hours}
        </motion.div>
        <div className={styles.label}>Hodin</div>
      </div>
      <div className={styles.countdownItem}>
        <motion.div 
          className={styles.number}
          key={timeLeft.minutes}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft.minutes}
        </motion.div>
        <div className={styles.label}>Minut</div>
      </div>
      <div className={styles.countdownItem}>
        <motion.div 
          className={styles.number}
          key={timeLeft.seconds}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {timeLeft.seconds}
        </motion.div>
        <div className={styles.label}>Sekund</div>
      </div>
    </div>
  );
};

export default Countdown;