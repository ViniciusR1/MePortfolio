import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#4f9cf9',
    skills: [
      { name: 'React.js', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'TypeScript', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'HTML5', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
  },
  {
    category: 'Backend',
    color: '#3dd68c',
    skills: [
      { name: 'Node.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'PostgreSQL', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Prisma ORM', level: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#f97b4f',
    skills: [
      { name: 'Git', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Docker', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'JavaScript', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      // { name: 'Linux', level: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.bg} />
      <div className="container" ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// tecnologias</p>
          <h2 className="section-title">Minhas Skills</h2>
          <p className="section-subtitle">
            Ferramentas e linguagens que uso no dia a dia para construir
            aplicações completas e escaláveis.
          </p>
        </motion.div>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className={styles.group}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.12 }}
            >
              <div className={styles.groupHeader}>
                <span className={styles.groupDot} style={{ background: group.color }} />
                <span className={styles.groupLabel} style={{ color: group.color }}>
                  {group.category}
                </span>
              </div>

              <div className={styles.skillList}>
                {group.skills.map((skill, si) => (
                  <div key={skill.name} className={styles.skill}>
                    <div className={styles.skillTop}>
                      <div className={styles.skillInfo}>
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={styles.skillIcon}
                          onError={e => { e.target.style.display = 'none'; }}
                        />
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.barFill}
                        style={{ background: group.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.9, delay: gi * 0.12 + si * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
