'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div 
          className={styles.footerContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.footerLogo}>
            <h3>Patrik & Fatima</h3>
            <p>10. října 2025</p>
          </div>

          <div className={styles.footerContact}>
            <h3>Kontakt</h3>
            <div className={styles.contactItem}>
              <FaPhone />
              <span>+420 607 658 949</span>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope />
              <span>svatbapgfg@gmail.com</span>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h3>Rychlé odkazy</h3>
            <ul>
              <li><a href="#home">Domů</a></li>
              <li><a href="#info">Informace</a></li>
              <li><a href="#route">Trasa</a></li>
              <li><a href="#accommodation">Ubytování</a></li>
              <li><a href="#gallery">Galerie</a></li>
              <li><a href="#rsvp">Dotazník</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className={styles.footerCopyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            Vytvořeno s <FaHeart className={styles.heart} /> &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;