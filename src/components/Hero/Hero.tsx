'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Countdown from '../Countdown/Countdown';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Patrik <span className={styles.ampersand}>&</span> Fatima
        </motion.h1>
        <motion.p 
          className={styles.date}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          10. října 2025
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Countdown targetDate="2025-10-10T12:00:00" />
        </motion.div>
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#rsvp" className={styles.rsvpButton}>
            Potvrdit účast
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;