import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Coffee, Sparkles } from 'lucide-react';
import styles from './About.module.css';
import minhaFoto from '../assets/minha-foto.jpeg'

// ── COLOQUE SUA FOTO ─────────────────────────────────────────
// 1. Adicione sua foto em src/assets/ (ex: minha-foto.jpg)
// 2. Importe: import minhaFoto from '../assets/minha-foto.jpg';
// 3. Substitua profilePhoto por minhaFoto abaixo
// 4. A classe styles.photo aplica object-fit: cover automaticamente
const profilePhoto = minhaFoto; // <- troque null pelo import da sua foto
// ─────────────────────────────────────────────────────────────

const cards = [
  { icon: MapPin, label: 'Localização', value: 'Brasil 🇧🇷' },
  { icon: Coffee, label: 'Foco atual', value: 'Dev Backend' },
  { icon: Sparkles, label: 'Interesse', value: 'Open Source' },
  { icon: User, label: 'Status', value: 'Disponível' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.layout} ref={ref}>

          {/* ── LEFT: FOTO ── */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.imgWrap}>
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Foto de perfil"
                  className={styles.photo}
                />
              ) : (
                <div className={styles.imgPlaceholder}>
                  <User size={56} strokeWidth={1} color="var(--text3)" />
                  <span>Sua foto aqui</span>
                </div>
              )}
              <div className={styles.imgBorder} />
              <div className={styles.imgGlow} />
              <div className={styles.floatingTag}>
                <span className={styles.tagDot} />
                <span>Open to work</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: TEXTO ── */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">// sobre mim</p>
            <h2 className="section-title">
              Construindo o futuro,{' '}
              <span style={{ color: 'var(--accent)' }}>linha por linha</span>
            </h2>

            <div className={styles.bio}>
              <p>
              Desenvolvedor Backend em início de carreira, apaixonado por tecnologia e pela criação de soluções que conectam desempenho, organização e escalabilidade. Estudo diariamente tecnologias como Node.js, TypeScript, JavaScript, bancos de dados relacionais, APIs REST e Git, aplicando esses conhecimentos em projetos práticos para fortalecer minha experiência.

              Estou em busca da minha primeira oportunidade profissional como Desenvolvedor Backend, onde possa contribuir com dedicação, aprender com profissionais experientes e evoluir constantemente na construção de sistemas robustos e eficientes.
              </p>
              <p>
                Colaborar em equipe e estou sempre buscando aprender novas
                tecnologias e resolver problemas reais com soluções elegantes.
              </p>
            </div>

            <div className={styles.cards}>
              {cards.map((card, i) => (
                <motion.div
                  key={card.label}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <card.icon size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <div>
                    <span className={styles.cardLabel}>{card.label}</span>
                    <span className={styles.cardValue}>{card.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
