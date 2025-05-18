'use client';

import { motion } from 'framer-motion';
import styles from './RSVP.module.css';

const RSVP: React.FC = () => {
  return (
    <section id="rsvp" className={styles.rsvp}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Potvrďte svou účast
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Prosím, potvrďte svou účast nejpozději do 10. září 2025
        </motion.p>

        <motion.div 
          className={styles.rsvpFormContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfbiQByybReMGwXUAHAUehkZ_aVI7bGiyZ3-XeXac5feVtByQ/viewform?embedded=true" 
            width="100%" 
            height="650"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Načítání...
          </iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;