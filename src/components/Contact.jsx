import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, GitFork, Phone, Send, CheckCircle } from 'lucide-react';
import styles from './Contact.module.css';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socials = [
  { icon: GitFork, label: 'GitHub', value: 'https://github.com/ViniciusR1', href: 'https://github.com' },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/seu-perfil', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Email', value: 'rodriguesviniciusc1@gmail.com', href: 'mailto:rodriguesviniciusc1@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+55 (81) 9 96426039', href: 'https://wa.me/5581996426039' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className={styles.section}>
      <div className="container" ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// contato</p>
          <h2 className="section-title">Vamos conversar?</h2>
          <p className="section-subtitle">
            Aberto a novas oportunidades, projetos freelance e colaborações.
            Manda uma mensagem — respondo rápido!
          </p>
        </motion.div>
        <div className={styles.layout}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className={styles.leftTitle}>Entre em contato</p>
            <div className={styles.socials}>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.social}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div className={styles.socialIcon}>
                    <s.icon size={18} />
                  </div>
                  <div>
                    <span className={styles.socialLabel}>{s.label}</span>
                    <span className={styles.socialValue}>{s.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className={styles.availability}>
              <span className={styles.availDot} />
              <span>Disponível para freela e CLT</span>
            </div>
          </motion.div>
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Seu nome</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="Seu Nome" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Seu email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className={styles.input} placeholder="exemplo@email.com" required />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Mensagem</label>
                <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} placeholder="Olá! Tenho um projeto interessante..." rows={5} required />
              </div>
              <button type="submit" className={styles.submit}>
                {sent ? <><CheckCircle size={16} /> Mensagem enviada!</> : <><Send size={16} /> Enviar mensagem</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
