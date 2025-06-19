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
                    <span>Sraz v 11:00, obřad v 12:00</span>
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
                      <p className={styles.routeValue}>24 km</p>
                      <p className={styles.routeLabel}>Vzdálenost</p>
                    </div>
                  </div>
                  <div className={styles.routeStat}>
                    <FaClock className={styles.routeIcon} />
                    <div>
                      <p className={styles.routeValue}>20 min</p>
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
                    <span>Sraz ve 14:15, hostina začíná ve 14:30</span>
                  </div>
                  <div className={styles.locationDetail}>
                    <FaParking className={styles.detailIcon} />
                    <span>Parkování u hotelu</span>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/Cb5f6WPvF721qxL48" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mapsButton}
            >
              Zobrazit v Google Maps
            </a>
          </div>

          <div className={styles.routeMap}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d81115.4213869521!2d14.975806782217974!3d50.555430779508335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x470eb3c9edbd9f8d%3A0xed385a788c57fb44!2zUGFya292acWhdMSbIHBvZCBWYWxkxaF0ZWpuZW0sIDI3OTI3LCBUdXJub3YgMS1QZWxlxaFhbnk!3m2!1d50.5685915!2d15.1660354!4m5!1s0x4709523ca622c611%3A0xf584478c785e506!2zSG90ZWwgTWFsw70gUGl2b3ZhciwgS2zDocWhdGVyIEhyYWRpxaF0xJsgbmFkIEppemVyb3UgMjIsIDI5NCAxNSBLbMOhxaF0ZXIgSHJhZGnFoXTEmyBuYWQgSml6ZXJvdQ!3m2!1d50.5247222!2d14.946388899999999!5e0!3m2!1sen!2scz!4v1750365407067!5m2!1sen!2scz" 
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
                <p className={styles.timelineTime}>11:00 – 11:30</p>
                <p className={styles.timelineEvent}>Sraz před hradem Valdštejn</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>12:00 – 12:30</p>
                <p className={styles.timelineEvent}>Svatební obřad</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>12:30 – 14:00</p>
                <p className={styles.timelineEvent}>Focení a drobné pohoštění na Valdštejně</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>14:15</p>
                <p className={styles.timelineEvent}>Sraz v hotelu malý Pivovar</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>14:30 – 16:00</p>
                <p className={styles.timelineEvent}>Přivítání v hotelu, rozbíjení talířů, zahájení hostiny</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>16:00 – 17:30</p>
                <p className={styles.timelineEvent}>Klavírní koncert, první tanec novomanželů, hudební vystoupení</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>17:30 – 18:00</p>
                <p className={styles.timelineEvent}>Krájení dortu</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>20:00 – 23:30</p>
                <p className={styles.timelineEvent}>Večerní zábava</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineTime}>24:00</p>
                <p className={styles.timelineEvent}>Ukončení slavnosti</p>
              </div>
            </div>
          </div>
          <motion.div 
            className={styles.scheduleNote}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>* Vyhrazujeme si právo změny v harmonogramu. Toto nemusí být finální verze programu.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Route;