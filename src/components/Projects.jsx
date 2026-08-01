import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitFork, X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import styles from './Projects.module.css';
import adegaDashImg from '../assets/adega_dash.png';
import construDashImg from '../assets/constru_dash.png';

const projects = [
  {
    id: 1,
    title: 'E-commerce Fullstack',
    description: 'Plataforma de e-commerce completa com painel admin e clientes, carrinho, autenticação JWT. Backend em Node.js com PostgreSQL e frontend em React.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Fullstack',
    images: [adegaDashImg],
    github: 'https://github.com/ViniciusR1/A_ultima_dose',
    live: 'https://aultimadose.netlify.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Gestão de Estoque Fullstack',
    description: 'Sistema web completo para loja de materiais de construção com cadastro de produtos, controle de entradas/saídas e alertas automáticos de reposição, autenticação jwt. Backend em Node.js e PostgreSQl Frontend em React',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Fullstack',
    images: [construDashImg],
    github: 'https://github.com/ViniciusR1/ContruMaxV2',
    live: 'https://construmaxv2.netlify.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Sistema de processamento assíncrono de notificações',
    description: 'Um sistema de processamento assíncrono de notificações com filas(Bullmq + Redis) e cron jobs, com persistência em PostgreSQL via prisma. Projeto de estudo focado em arquitetura de filas, retry com backoff exponencial, dead-letter queue e soft delete.',
    tags: ['Node.js', 'Typescript', 'Express', 'PostgreSQL', 'Prisma', 'Bullmq', 'Redis', 'Docker'],
    category: 'Backend',
    images: [],
    github: 'https://github.com/ViniciusR1/fila-notificacoes',
    live: '',
    featured: true,
  },
  
  // {
  //   id: 2,
  //   title: 'Dashboard Analytics',
  //   description: 'Dashboard interativo com gráficos em tempo real, filtros avançados e exportação de relatórios. Consome múltiplas APIs e exibe dados com Recharts.',
  //   tags: ['React', 'TypeScript', 'Recharts', 'REST API'],
  //   category: 'Frontend',
  //   images: [],
  //   github: 'https://github.com',
  //   live: null,
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   title: 'API REST Node.js',
  //   description: 'API RESTful com autenticação JWT, rate limiting, documentação Swagger, testes automatizados e deploy via Docker.',
  //   tags: ['Node.js', 'TypeScript', 'Prisma', 'JWT', 'Swagger'],
  //   category: 'Backend',
  //   images: [],
  //   github: 'https://github.com',
  //   live: null,
  //   featured: false,
  // },
  // {
  //   id: 4,
  //   title: 'App de Tarefas',
  //   description: 'Aplicação de gerenciamento de tarefas com drag-and-drop, categorias, notificações e sincronização em tempo real via WebSockets.',
  //   tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
  //   category: 'Fullstack',
  //   images: [],
  //   github: 'https://github.com',
  //   live: 'https://exemplo.com',
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: 'Blog Headless CMS',
  //   description: 'Blog pessoal com CMS headless, sistema de comentários, dark mode e RSS feed. Construído com Next.js e Markdown.',
  //   tags: ['Next.js', 'TypeScript', 'Markdown', 'CSS Modules'],
  //   category: 'Frontend',
  //   images: [],
  //   github: 'https://github.com',
  //   live: 'https://exemplo.com',
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: 'CLI DevTools',
  //   description: 'Ferramenta de linha de comando para automação de tarefas de desenvolvimento: scaffold de projetos, geração de componentes e deploy simplificado.',
  //   tags: ['Node.js', 'TypeScript', 'Commander.js'],
  //   category: 'Backend',
  //   images: [],
  //   github: 'https://github.com',
  //   live: null,
  //   featured: false,
  // },
];

const categoryColors = {
  Fullstack: 'var(--accent)',
  Frontend: 'var(--green)',
  Backend: '#f97b4f',
};

const filters = ['Todos', 'Fullstack', 'Frontend', 'Backend'];

function ProjectCard({ project, onClick, index, inView }) {
  return (
    <motion.div
      className={`${styles.card} ${project.featured ? styles.cardFeatured : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onClick={() => onClick(project)}
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(project)}
      role="button"
    >
      <div className={styles.cardImg}>
        {project.images.length > 0 ? (
          <img src={project.images[0]} alt={project.title} className={styles.cardImgEl} />
        ) : (
          <div className={styles.cardImgEmpty}>
            <ImageOff size={28} color="var(--text3)" />
            <span>Adicione prints do projeto</span>
          </div>
        )}
        <div className={styles.cardOverlay}>
          <span className={styles.cardCategory} style={{ color: categoryColors[project.category] }}>{project.category}</span>
          {project.featured && <span className={styles.featuredBadge}>★ Destaque</span>}
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
        <div className={styles.cardTags}>
          {project.tags.slice(0, 4).map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          {project.tags.length > 4 && <span className={styles.tagMore}>+{project.tags.length - 4}</span>}
        </div>
        <div className={styles.cardLinks}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn} onClick={e => e.stopPropagation()}>
              <GitFork size={14} /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkBtnAccent}`} onClick={e => e.stopPropagation()}>
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Modal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  const hasImages = project.images.length > 0;
  const prev = e => { e.stopPropagation(); setImgIdx(i => (i - 1 + project.images.length) % project.images.length); };
  const next = e => { e.stopPropagation(); setImgIdx(i => (i + 1) % project.images.length); };

  return (
    <motion.div className={styles.modalOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose}><X size={18} /></button>
        <div className={styles.modalGallery}>
          {hasImages ? (
            <>
              <img src={project.images[imgIdx]} alt={project.title} className={styles.modalImg} />
              {project.images.length > 1 && (
                <>
                  <button className={`${styles.galBtn} ${styles.galBtnLeft}`} onClick={prev}><ChevronLeft size={20} /></button>
                  <button className={`${styles.galBtn} ${styles.galBtnRight}`} onClick={next}><ChevronRight size={20} /></button>
                  <div className={styles.galDots}>
                    {project.images.map((_, i) => (
                      <button key={i} className={`${styles.dot} ${i === imgIdx ? styles.dotActive : ''}`} onClick={e => { e.stopPropagation(); setImgIdx(i); }} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={styles.modalImgEmpty}>
              <ImageOff size={40} color="var(--text3)" />
              <span>Adicione URLs de prints ao array <code>images</code> deste projeto em Projects.jsx</span>
            </div>
          )}
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalMeta}>
            <span className={styles.modalCategory} style={{ color: categoryColors[project.category] }}>{project.category}</span>
            {project.featured && <span className={styles.modalFeatured}>★ Destaque</span>}
          </div>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalDesc}>{project.description}</p>
          <div className={styles.modalSection}>
            <span className={styles.modalSectionLabel}>Tecnologias usadas</span>
            <div className={styles.modalTags}>
              {project.tags.map(tag => <span key={tag} className={styles.modalTag}>{tag}</span>)}
            </div>
          </div>
          <div className={styles.modalActions}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className={styles.modalBtn}>
                <GitFork size={16} /> Ver código
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className={`${styles.modalBtn} ${styles.modalBtnAccent}`}>
                <ExternalLink size={16} /> Abrir demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState(null);
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projetos" className={styles.section}>
      <div className="container" ref={ref}>
        <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="section-label">// meus projetos</p>
          <h2 className="section-title">O que eu construí</h2>
          <p className="section-subtitle">
            Projetos reais que desenvolvi — clique em qualquer card para ver prints, descrição completa e tecnologias.
          </p>
        </motion.div>
        <motion.div className={styles.filters} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}>
          {filters.map(f => (
            <button key={f} className={`${styles.filterBtn} ${filter === f ? styles.filterBtnActive : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </motion.div>
        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} onClick={setSelected} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
