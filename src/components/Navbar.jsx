import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoBracket}>&lt;</span>
          <span className={styles.logoName}>Dev</span>
          <span className={styles.logoDot}>/&gt;</span>
        </a>

        <ul className={styles.links}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.link} ${active === link.href ? styles.linkActive : ''}`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span className={styles.linkDot} layoutId="dot" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contato" className={styles.cta}>
          Hire me
        </a>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
