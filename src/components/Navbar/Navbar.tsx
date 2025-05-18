'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { id: 'home', label: 'Domů', href: '#home' },
  { id: 'info', label: 'Informace', href: '#info' },
  { id: 'route', label: 'Trasa', href: '#route' },
  { id: 'accommodation', label: 'Ubytování', href: '#accommodation' },
  { id: 'gallery', label: 'Galerie', href: '#gallery' },
  { id: 'rsvp', label: 'Dotazník', href: '#rsvp' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home" className={scrolled ? '' : styles.logoLight}>Svatba 10.10.2025</a>
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <motion.li 
                key={item.id} 
                className={styles.navItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className={scrolled ? '' : styles.navItemLight}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button 
          className={`${styles.menuToggle} ${scrolled ? '' : styles.menuToggleLight}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;