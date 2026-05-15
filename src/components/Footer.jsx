import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.logo}>
            <span style={{ color: 'var(--text3)' }}>&lt;</span>Dev<span style={{ color: 'var(--accent)' }}>/&gt;</span>
          </span>
          <p className={styles.copy}>
            © {new Date().getFullYear()} — Feito com React
          </p>
          <p className={styles.mono}>// sempre aprendendo</p>
        </div>
      </div>
    </footer>
  );
}
