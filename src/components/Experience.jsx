import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    type: 'education',
    role: 'Técnico em Desenvolvimento de Sistemas',
    org: 'SENAI/PE',
    period: '2025 – 2026',
    desc: 'Formação técnica em desenvolvimento de software com foco em banco de dados e desenvolvimento web.',
    skills: ['Node', 'MYSQL', 'HTML/CSS', 'JavaScript', 'React'],
  },
  {
    type: 'work',
    role: 'Desenvolvedor Fullstack Jr.',
    org: 'Empresa ABC (Freelance)',
    period: '2023 – Atual',
    desc: 'Desenvolvimento de aplicações web completas para clientes, incluindo e-commerce, dashboards e APIs RESTful. Participação em todo o ciclo de desenvolvimento.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    type: 'education',
    role: 'Cursos e Certificações',
    org: 'Rocketseat · Alura · Udemy',
    period: '2022 – Presente',
    desc: 'Mais de 400 horas de cursos em desenvolvimento fullstack, incluindo React, Node.js, TypeScript, DevOps e boas práticas de engenharia de software.',
    skills: ['React', 'TypeScript', 'DevOps', 'Arquitetura'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.bg} />
      <div className="container" ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// trajetória</p>
          <h2 className="section-title">Experiência & Formação</h2>
          <p className="section-subtitle">
            Minha jornada de aprendizado e experiências práticas ao longo do tempo.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {/* Vertical line */}
          <motion.div
            className={styles.line}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
            >
              {/* Node */}
              <div className={styles.node}>
                {exp.type === 'work'
                  ? <Briefcase size={14} />
                  : <GraduationCap size={14} />}
              </div>

              <div className={styles.card}>
                <div className={styles.cardMeta}>
                  <span className={`${styles.typeTag} ${exp.type === 'work' ? styles.typeWork : styles.typeEdu}`}>
                    {exp.type === 'work' ? 'Trabalho' : 'Educação'}
                  </span>
                  <span className={styles.period}>
                    <Calendar size={12} /> {exp.period}
                  </span>
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.org}>{exp.org}</p>
                <p className={styles.desc}>{exp.desc}</p>
                <div className={styles.tags}>
                  {exp.skills.map(s => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
