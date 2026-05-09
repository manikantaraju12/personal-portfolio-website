import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUpRight,
  Menu,
  MoveRight,
  PanelTopOpen,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'
import {
  aboutPoints,
  avatarPalette,
  certifications,
  contactLinks,
  education,
  footerNotes,
  highlights,
  navLinks,
  profile,
  processSteps,
  projects,
  sectionLabels,
  skills,
  stats,
} from './data/portfolio'

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })

  const heroFloat = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroDrift = useTransform(scrollYProgress, [0, 1], [0, -80])
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  const currentYear = new Date().getFullYear()

  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" aria-hidden="true" />
      <div className="page-glow page-glow-right" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${profile.name} home`}>
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span>
            <strong>{profile.name}</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              id="primary-navigation"
              className="mobile-nav"
              aria-label="Primary navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero section" id="home" ref={heroRef}>
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <span className="eyebrow">Available for freelance and full-time opportunities</span>
            <h1>
              Building cloud-focused systems with clarity, structure, and practical engineering decisions.
            </h1>
            <p className="lead">{profile.tagline}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View My Work
                <MoveRight size={18} />
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>
                Download Resume / Contact
                <ArrowUpRight size={18} />
              </a>
            </div>

            <ul className="hero-highlights" aria-label="Highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.aside className="hero-panel" style={{ opacity: prefersReducedMotion ? 1 : heroFade }}>
            <motion.div className="orb orb-a" style={{ y: prefersReducedMotion ? 0 : heroFloat }} aria-hidden="true" />
            <motion.div className="orb orb-b" style={{ y: prefersReducedMotion ? 0 : heroDrift }} aria-hidden="true" />

            <div className="hero-card">
              <div className="hero-avatar" aria-hidden="true">
                <span>{profile.name}</span>
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
              </div>

              <div className="hero-card-copy">
                <p className="card-label">Focused on</p>
                <strong>{profile.role}</strong>
                <p>{profile.bio}</p>
              </div>

              <div className="hero-metrics">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        <motion.section className="section about-section" id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <SectionHeader
            eyebrow={sectionLabels.about}
            title="A design-minded developer who likes systems that feel human."
            description="This site is intentionally structured around clarity: each section has a job, each card has a rhythm, and each animation only appears when it helps the content breathe."
          />

          <div className="about-grid">
            <div className="about-copy">
              {aboutPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
              <p>{profile.learning}</p>
            </div>

            <div className="about-visual">
              <div className="avatar-stack" aria-hidden="true">
                {avatarPalette.map((gradient, index) => (
                  <span
                    key={gradient}
                    className={`avatar-badge avatar-badge-${index + 1}`}
                  />
                ))}
                <div className="avatar-core">
                  <PanelTopOpen size={28} />
                  <span>{profile.name}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.article
                  key={step.title}
                  className="process-card"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <span className="process-index">0{index + 1}</span>
                  <Icon size={20} />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <section className="section skills-section" id="skills">
          <SectionHeader
            eyebrow={sectionLabels.skills}
            title="Tools and technologies I use to move from idea to interface."
            description="The skill cards below are intentionally visual, using grouped categories instead of a flat list so the stack reads like a system instead of inventory."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.article
                  key={skill.title}
                  className="skill-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="skill-card-head">
                    <span className="skill-icon">
                      <Icon size={18} />
                    </span>
                    <h3>{skill.title}</h3>
                  </div>
                  <ul className="skill-list">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeader
            eyebrow={sectionLabels.projects}
            title="Selected work with clear structure, purposeful motion, and strong visual tone."
            description="Each project card includes a description, technology stack, and repository link so the section remains useful even when scanned quickly."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className={`project-swatch project-swatch-${index + 1}`} />
                <div className="project-copy">
                  <div className="project-topline">
                    <span>0{index + 1}</span>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Open link
                    </a>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul className="stack-list" aria-label={`${project.title} technologies`}>
                    {project.stack.map((stackItem) => (
                      <li key={stackItem}>{stackItem}</li>
                    ))}
                  </ul>

                  <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                    View source code
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section credentials-section" id="credentials">
          <SectionHeader
            eyebrow={sectionLabels.credentials}
            title="Certifications and education that back up the cloud and DevOps work."
            description="This section makes the resume evidence visible in the portfolio so recruiters can verify the background without opening the PDF."
          />

          <div className="credentials-grid">
            <motion.article
              className="skill-card credentials-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
            >
              <div className="skill-card-head">
                <span className="skill-icon">01</span>
                <h3>Certifications</h3>
              </div>
              <ul className="credentials-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="skill-card credentials-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="skill-card-head">
                <span className="skill-icon">02</span>
                <h3>Education</h3>
              </div>
              <div className="education-list">
                {education.map((item) => (
                  <article key={item.institution} className="education-item">
                    <strong>{item.institution}</strong>
                    <p>{item.credential}</p>
                    <span>{item.period}</span>
                    <small>{item.detail}</small>
                  </article>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeader
            eyebrow={sectionLabels.contact}
            title="Let’s build something polished and useful."
            description="The links below are the fastest way to reach me. Swap in your real contact details and repository URLs before publishing."
          />

          <div className="contact-grid">
            <motion.div
              className="contact-card contact-callout"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <span className="eyebrow">Open to new work</span>
              <h3>{profile.role}</h3>
              <p>{profile.tagline}</p>
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={18} />
              </a>
            </motion.div>

            <div className="contact-links">
              {contactLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    className="contact-card contact-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    <span className="contact-icon">
                      <Icon size={18} />
                    </span>
                    <span>
                      <strong>{link.label}</strong>
                      <small>{link.value}</small>
                    </span>
                    <ArrowUpRight size={16} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>{profile.name}</strong>
          <p>Designed to feel personal, responsive, and fast.</p>
        </div>

        <ul>
          {footerNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>

        <small>© {currentYear} {profile.name}. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App