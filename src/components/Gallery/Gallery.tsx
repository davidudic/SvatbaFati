'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import styles from './Gallery.module.css';
import { GalleryImage } from '@/types';

// Tuto část by bylo potřeba upravit podle skutečných obrázků
const images: GalleryImage[] = [
  { id: 1, src: '/images/gallery/photo1.jpg', alt: 'Galerie 1' },
  { id: 2, src: '/images/gallery/photo2.jpg', alt: 'Galerie 2' },
  { id: 3, src: '/images/gallery/photo3.jpg', alt: 'Galerie 3' },
  { id: 4, src: '/images/gallery/photo4.jpg', alt: 'Galerie 4' },
  { id: 5, src: '/images/gallery/photo5.jpg', alt: 'Galerie 5' },
  { id: 6, src: '/images/gallery/photo6.jpg', alt: 'Galerie 6' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Detekce mobilního zařízení
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Počáteční kontrola
    checkMobile();
    
    // Poslouchání změny velikosti okna
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      // Vyčištění intervalu při odmontování komponenty
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Nastavení automatického posouvání slideru každé 3 sekundy
  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMobile, images.length]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    // Zastavíme automatické posouvání, když je otevřený lightbox
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Obnovíme automatické posouvání na mobilních zařízeních
    if (isMobile && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000);
    }
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let nextIndex;

    if (direction === 'prev') {
      nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(images[nextIndex]);
  };

  const navigateSlide = (direction: 'prev' | 'next') => {
    // Zastavíme automatické posouvání při manuální navigaci
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (direction === 'prev') {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
    
    // Obnovíme automatické posouvání po 5 sekundách
    setTimeout(() => {
      if (!intervalRef.current && isMobile) {
        intervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
      }
    }, 5000);
  };

  // Ošetření klávesových zkratek pro navigaci v lightboxu
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  return (
    <section id="gallery" className={styles.gallery} onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Galerie
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Naše společné vzpomínky
        </motion.p>

        {isMobile ? (
          // Mobilní karusel
          <div className={styles.carousel}>
            <div className={styles.carouselInner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((image) => (
                <div key={image.id} className={styles.carouselSlide} onClick={() => openLightbox(image)}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className={styles.carouselImage} 
                  />
                </div>
              ))}
            </div>
            <button 
              className={`${styles.carouselControl} ${styles.carouselPrev}`} 
              onClick={() => navigateSlide('prev')}
            >
              <FaArrowLeft />
            </button>
            <button 
              className={`${styles.carouselControl} ${styles.carouselNext}`} 
              onClick={() => navigateSlide('next')}
            >
              <FaArrowRight />
            </button>
            <div className={styles.carouselIndicators}>
              {images.map((_, index) => (
                <span 
                  key={index} 
                  className={`${styles.carouselIndicator} ${index === currentSlide ? styles.active : ''}`}
                  onClick={() => {
                    setCurrentSlide(index);
                    // Zastavíme automatické posouvání při kliknutí na indikátor
                    if (intervalRef.current) {
                      clearInterval(intervalRef.current);
                      intervalRef.current = null;
                    }
                    // Obnovíme automatické posouvání po 5 sekundách
                    setTimeout(() => {
                      if (!intervalRef.current && isMobile) {
                        intervalRef.current = setInterval(() => {
                          setCurrentSlide((prev) => (prev + 1) % images.length);
                        }, 3000);
                      }
                    }, 5000);
                  }}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          // Desktop grid
          <motion.div 
            className={styles.galleryGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {images.map((image, index) => (
              <motion.div 
                key={image.id} 
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={styles.galleryImage} 
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className={styles.lightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.lightboxContent}>
                <button 
                  className={styles.closeButton} 
                  onClick={closeLightbox}
                >
                  <FaTimes />
                </button>
                <button 
                  className={`${styles.navButton} ${styles.prevButton}`} 
                  onClick={() => navigateImage('prev')}
                >
                  <FaArrowLeft />
                </button>
                <motion.img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className={styles.lightboxImage}
                  key={selectedImage.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                <button 
                  className={`${styles.navButton} ${styles.nextButton}`} 
                  onClick={() => navigateImage('next')}
                >
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;