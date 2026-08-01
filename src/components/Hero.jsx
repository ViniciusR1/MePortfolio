import { motion } from 'framer-motion';
import { ArrowDown, GitFork, Mail, Download } from 'lucide-react';
import styles from './Hero.module.css';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} />
      <div className={styles.gradientBottom} />
      <div className={`container ${styles.content}`}>
        <motion.div className={styles.badge} {...fadeUp(0.1)}>
          <span className={styles.dot} />
          <span>Disponível para projetos</span>
        </motion.div>
        <motion.h1 className={styles.title} {...fadeUp(0.2)}>
          Backend
          <br />
          <span className={styles.titleAccent}>Developer</span>
        </motion.h1>
        <motion.p className={styles.desc} {...fadeUp(0.35)}>
          Construo interfaces modernas e APIs robustas — do design ao deploy.
          <br />
          Foco em performance, experiência do usuário e código limpo.
        </motion.p>
        <motion.div className={styles.actions} {...fadeUp(0.45)}>
          <a href="#projetos" className={styles.btnPrimary}>
            Ver Projetos
            <ArrowDown size={16} />
          </a>
          <a href="/curriculo.pdf" className={styles.btnSecondary} download="Curriculo-Vinicius-Rodrigues.pdf">
            <Download size={15} />
            Download CV
          </a>
        </motion.div>
        <motion.div className={styles.socials} {...fadeUp(0.55)}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.social} title="GitHub">
            <GitFork size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.social} title="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:seuemail@email.com" className={styles.social} title="Email">
            <Mail size={18} />
          </a>
        </motion.div>
        <motion.div className={styles.stats} {...fadeUp(0.65)}>
          {[
            { num: '3+', label: 'Projetos' },
            { num: '2+', label: 'Anos estudando' },
            { num: '4+', label: 'Tecnologias' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className={styles.scrollHint}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
