import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitText from '../components/SplitText'
import Silk from '../components/Silk'
import MagicBento from '../components/MagicBento'
import ContactModal from '../components/ContactModal'
import { caseStudies } from '../data/caseStudies'
import './Home.css'

const ROLES = ['GTM Engineer', 'Strategy', 'AI Workflow']

function AnimatedRoles() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % ROLES.length)
        setVisible(true)
      }, 300)
    }, 2400)
    return () => clearInterval(cycle)
  }, [])

  return (
    <span className={`hero__role-pill ${visible ? 'hero__role-pill--in' : 'hero__role-pill--out'}`}>
      {ROLES[idx]}
    </span>
  )
}

function useReveal() {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); obs.disconnect() }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, revealed]
}

const bentoCards = caseStudies.map(cs => ({
  slug: cs.slug,
  label: cs.tag,
  title: cs.title,
  description: cs.subtitle,
  tagColor: cs.tagColor,
  accentColor: cs.accentColor,
  color: '#0d1117',
}))

export default function Home() {
  const [showContact, setShowContact] = useState(false)
  const [csRef, csRevealed] = useReveal()
  const navigate = useNavigate()

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__silk-bg" aria-hidden="true">
          <Silk
            speed={3}
            scale={1.2}
            color="#3d5a80"
            noiseIntensity={1.2}
            rotation={0.3}
          />
        </div>

        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Available for new projects
            </div>

            <SplitText
              tag="h1"
              text="Anand V"
              className="hero__name"
              splitType="chars"
              delay={55}
              duration={0.7}
              ease="power3.out"
              from={{ opacity: 0, y: 48, rotationX: -30 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="center"
            />

            <p className="hero__roles">
              <AnimatedRoles />
            </p>

            <p className="hero__desc">
              I design structured, data-driven strategies that help businesses grow efficiently and make better decisions.
            </p>
            <p className="hero__desc">
              My work focuses on simplifying complexity, improving systems, and solving real-world business problems.
            </p>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">3+</span>
                <span className="hero__stat-label">Case Studies</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">GTM</span>
                <span className="hero__stat-label">Strategy</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">AI</span>
                <span className="hero__stat-label">Workflows</span>
              </div>
            </div>

            <div className="hero__actions">
              <Link to="/works" className="btn btn--primary">View Works</Link>
              <button className="btn btn--ghost" onClick={() => setShowContact(true)}>
                Get in touch
              </button>
            </div>
          </div>

        </div>
      </section>

      <section ref={csRef} className={`case-studies-section ${csRevealed ? 'cs--revealed' : ''}`}>
        <div className="cs-section__meta">
          <p className="cs-section__label">Selected Work</p>
          <SplitText
            tag="h2"
            text="Case Studies"
            className="cs-section__title"
            splitType="words"
            delay={120}
            duration={0.65}
            ease="power3.out"
            from={{ opacity: 0, y: 32 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-60px"
            textAlign="center"
          />
          <p className="cs-section__desc">
            Real engagements. Measurable outcomes. Each project tackles a specific growth or operations challenge from first principles.
          </p>
          <Link to="/works" className="cs-section__link">
            View all works <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="cs-section__bento">
          <MagicBento
            cards={bentoCards}
            onCardClick={slug => navigate(`/works/${slug}`)}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="61, 90, 128"
            particleCount={10}
            spotlightRadius={280}
          />
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </main>
  )
}
