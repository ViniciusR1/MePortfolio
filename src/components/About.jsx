import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Coffee, Sparkles } from 'lucide-react';
import styles from './About.module.css';

const cards = [
  { icon: MapPin, label: 'Localização', value: 'Brasil 🇧🇷' },
  { icon: Coffee, label: 'Foco atual', value: 'Dev Backend' },
  { icon: Sparkles, label: 'Interesse', value: 'Open Source' },
  { icon: User, label: 'Status', value: 'Disponível' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.layout} ref={ref}>
          {/* Left */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.imgWrap}>
              <div className={styles.imgPlaceholder}>
                <User size={64} strokeWidth={1} color="var(--text3)" />
                <span>Sua foto aqui</span>
              </div>
              <div className={styles.imgBorder} />
              <div className={styles.imgGlow} />

              {/* Floating tag */}
              <div className={styles.floatingTag}>
                <span className={styles.tagDot} />
                <span>Open to work</span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">// sobre mim</p>
            <h2 className="section-title">
              Construindo o futuro,
              <br />
              <span style={{ color: 'var(--accent)' }}>linha por linha</span>
            </h2>

            <div className={styles.bio}>
              <p>
                Desenvolvedor Backend em formação apaixonado por criar experiências digitais
                completas — do design da interface até a arquitetura do servidor.
                Com base em Html, Css, Javascript, React, Node.js, TypeScript e bancos de dados
                relacionais, Git. Busco oportunidades na área de tecnologias para aplicar conhecimentos e contribuir com soluções
              </p>
              <p>
                Gosto de escrever código limpo, pensar em escalabilidade e
                colaborar em equipe. Estou sempre buscando aprender novas
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
                  <card.icon size={16} color="var(--accent)" />
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
