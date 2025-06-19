'use client';

import { motion } from 'framer-motion';
import { FaBed, FaInfoCircle } from 'react-icons/fa';
import styles from './Accommodation.module.css';

const Accommodation: React.FC = () => {
  return (
    <section id="accommodation" className={styles.accommodation}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ubytování
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hotel Malý Pivovar - ceník pokojů (30% sleva)
        </motion.p>

        <motion.div 
          className={styles.accommodationNote}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.infoIcon}>
            <FaInfoCircle />
          </div>
          <p>
            Ubytování si každý host platí sám. Při rezervaci prosím uveďte, že jste svatebními hosty.
          </p>
        </motion.div>

        <motion.div 
          className={styles.tableContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <table className={styles.accommodationTable}>
            <thead>
              <tr>
                <th>Typ pokoje</th>
                <th>Obsazenost 1 osoba</th>
                <th>Obsazenost 2 osoby</th>
                <th>Obsazenost 3 osoby</th>
                <th>Obsazenost 4 osoby</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dvoulůžkový pokoj standard</td>
                <td>1 890 Kč</td>
                <td>2 030 Kč</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Třílůžkový pokoj standard</td>
                <td>1 890 Kč</td>
                <td>2 030 Kč</td>
                <td>2 450 Kč</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Dvoulůžkový pokoj VIP</td>
                <td>2 380 Kč</td>
                <td>2 590 Kč</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Třílůžkový pokoj VIP</td>
                <td>2 380 Kč</td>
                <td>2 590 Kč</td>
                <td>2 870 Kč</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Dvoulůžkové apartmá - DELUXE</td>
                <td>2 660 Kč</td>
                <td>2 870 Kč</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Čtyřlůžkové apartmá - DELUXE</td>
                <td>2 660 Kč</td>
                <td>2 870 Kč</td>
                <td>3 150 Kč</td>
                <td>3 430 Kč</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div 
          className={styles.accommodationInfo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.infoItem} style={{ flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
            <div className={styles.iconWrapper} style={{ marginBottom: '1rem' }}>
              <FaBed />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Rezervace</h3>
              <p>Rezervace zprostředkujeme my na základě dotazníku níže.</p>
              <a 
                href="#rsvp" 
                className="btn"
                style={{ marginTop: '1rem', display: 'inline-block' }}
              >
                Přejít na dotazník
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.accommodationButton}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="https://www.hotelmalypivovar.cz/index.php/cz/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            Zobrazit webové stránky hotelu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;