'use client';

import { motion } from 'framer-motion';
import {FaCarSide, FaClock, FaParking} from 'react-icons/fa';
import styles from './Route.module.css';

const Route: React.FC = () => {
  return (
    <section id="route" className={styles.route}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Jak se k nám dostanete
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trasa z obřadu na hostinu
        </motion.p>

        <div className={styles.routeContainer}>
          <div className={styles.routeInfo}>
            <div className={styles.routeLocations}>
              <div className={styles.locationCard}>
                <div className={styles.locationHeader}>
                  <div className={styles.locationNumber}>1</div>
                  <h3>Hrad Valdštejn</h3>
                </div>
                <p>Kamenice, 511 01 Turnov</p>
                <div className={styles.locationDetails}>
                  <div className={styles.locationDetail}>
                    <FaClock className={styles.detailIcon} />
                    <span>Obřad začíná v 12:00</span>
                  </div>
                  <div className={styles.locationDetail}>
                    <FaParking className={styles.detailIcon} />
                    <span>Parkování pod hradem (10 min pěšky)</span>
                  </div>
                </div>
              </div>

              <div className={styles.routeDetails}>
                <div className={styles.routeLine}></div>
                <div className={styles.routeStats}>
                  <div className={styles.routeStat}>
                    <FaCarSide className={styles.routeIcon} />
                    <div>
                      <p className={styles.routeValue}>30 km</p>
                      <p className={styles.routeLabel}>Vzdálenost</p>
                    </div>
                  </div>
                  <div className={styles.routeStat}>
                    <FaClock className={styles.routeIcon} />
                    <div>
                      <p className={styles.routeValue}>40 min</p>
                      <p className={styles.routeLabel}>Doba jízdy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.locationCard}>
                <div className={styles.locationHeader}>
                  <div className={styles.locationNumber}>2</div>
                  <h3>Hotel Malý Pivovar</h3>
                </div>
                <p>Klášter Hradiště nad Jizerou 475</p>
                <p>294 15 Mnichovo Hradiště</p>
                <div className={styles.locationDetails}>
                  <div className={styles.locationDetail}>
                    <FaClock className={styles.detailIcon} />
                    <span>Hostina začíná ve 14:30</span>
                  </div>
                  <div className={styles.locationDetail}>
                    <FaParking className={styles.detailIcon} />
                    <span>Parkování u hotelu</span>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/Hrad+Vald%C5%A1tejn,+Kamenice,+Czech+Republic/Hotel+Mal%C3%BD+pivovar,+Kl%C3%A1%C5%A1ter+Hradi%C5%A1t%C4%9B+nad+Jizerou+475+-+Kl%C3%A1%C5%A1ter,+295+68+Kl%C3%A1%C5%A1ter+H/data=!4m14!4m13!1m5!1m1!1s0x470eb9c2f7058e67:0x7efd9a239d1a0f0f!2m2!1d15.1774813!2d50.5660657!1m5!1m1!1s0x470934e6d6b19eb5:0xa7a5ab5e8f38f33!2m2!1d14.9591195!2d50.527972!3e0?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mapsButton}
            >
              Zobrazit v Google Maps
            </a>
          </div>

          <div className={styles.routeMap}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d80771.45222696667!2d15.048791734696733!3d50.53996037664183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x470eb9c2f7058e67%3A0x7efd9a239d1a0f0f!2zSHJhZCBWYWxkxaF0ZWpuLCBLYW1lbmljZSwgQ3plY2ggUmVwdWJsaWM!3m2!1d50.5660657!2d15.1774813!4m5!1s0x470934e6d6b19eb5%3A0xa7a5ab5e8f38f33!2zSG90ZWwgTWFsw70gcGl2b3ZhciwgS2zDocWhdGVyLCBNbmljaG92byBIcmFkacWhdMSbLCBLbMOhxaF0ZXIgSHJhZGnFocSbIG5hZCBKaXplcm91IDQ3NSAtIEtsw6HFoXRlciwgMjk1IDY4IEtsw6HFoXRlciBI!3m2!1d50.527972!2d14.959119499999999!5e0!3m2!1sen!2scz!4v1683021529881!5m2!1sen!2scz" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>
        </div>

        <motion.div 
          className={styles.routeTimeline}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Harmonogram</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>12:00</p>
                <p className={styles.timelineEvent}>Svatební obřad na hradě Valdštejn</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>13:30 - 14:30</p>
                <p className={styles.timelineEvent}>Přesun na hostinu</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>14:30</p>
                <p className={styles.timelineEvent}>Začátek svatební hostiny v hotelu Malý Pivovar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Route;