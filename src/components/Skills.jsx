import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#60a5fa',
    skills: [
      { name: 'React.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'HTML5',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      // { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    category: 'Backend',
    color: '#34d399',
    skills: [
      { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Prisma ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
      { name: 'REST API',   icon: null, abbr: 'AP' },
      { name: 'JWT Auth',   icon: null, abbr: 'JW' },
    ],
  },
  {
    category: 'Bancos',
    color: '#fb923c',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      // { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      // { name: 'SQLite',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#c084fc',
    skills: [
      { name: 'Git',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      // { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      // { name: 'Linux',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      // { name: 'Nginx',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

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
            Tecnologias que uso diariamente em produção — escolhidas pelo que entregam.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.column}>

              {/* Label da categoria */}
              <div className={styles.columnHeader}>
                <span
                  className={styles.columnLabel}
                  style={{ color: group.color }}
                >
                  {group.category}
                </span>
              </div>

              {/* Lista de skills — sem animação individual para evitar opacity stuck */}
              <div className={styles.skillList}>
                {group.skills.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>

                    {/* Badge */}
                    <div
                      className={styles.skillBadge}
                      style={{
                        background: `${group.color}22`,
                        border: `1px solid ${group.color}44`,
                      }}
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={styles.skillIcon}
                          onError={e => {
                            e.target.outerHTML = `<span style="font-family:monospace;font-size:11px;font-weight:800;color:${group.color}">${skill.name.slice(0,2).toUpperCase()}</span>`;
                          }}
                        />
                      ) : (
                        <span className={styles.skillAbbr} style={{ color: group.color }}>
                          {skill.abbr}
                        </span>
                      )}
                    </div>

                    {/* Nome — sempre visível */}
                    <span className={styles.skillName}>{skill.name}</span>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
