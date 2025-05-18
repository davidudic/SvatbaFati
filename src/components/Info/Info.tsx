'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaGlassCheers, FaInfoCircle } from 'react-icons/fa';
import styles from './Info.module.css';

const Info: React.FC = () => {
  return (
    <section id="info" className={styles.info}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Svatební Informace
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Vše, co potřebujete vědět o našem velkém dni
        </motion.p>

        <div className={styles.infoContainer}>
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <FaCalendarAlt className={styles.infoIcon} />
              <h3>Datum</h3>
            </div>
            <p>Pátek 10. října 2025</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <FaClock className={styles.infoIcon} />
              <h3>Čas</h3>
            </div>
            <p>12:00</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <h3>Obřad</h3>
            </div>
            <p>Hrad Valdštejn</p>
            <a 
              href="https://www.hrad-valdstejn.cz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.infoLink}
            >
              Více informací →
            </a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <FaGlassCheers className={styles.infoIcon} />
              <h3>Hostina</h3>
            </div>
            <p>Hotel Malý Pivovar</p>
            <p>Klášter Mnichovo Hradiště</p>
            <a 
              href="https://www.hotelmalypivovar.cz/index.php/cz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.infoLink}
            >
              Více informací →
            </a>
          </div>
        </div>

        <motion.div 
          className={styles.infoNote}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FaInfoCircle className={styles.noteIcon} />
          <p>Prosíme, potvrďte svou účast nejpozději do 10. září 2025 pomocí formuláře v sekci Dotazníku.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;