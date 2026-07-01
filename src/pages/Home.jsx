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

const ILLUSTRATIONS = {
  'gst-saas-strategy': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Funnel / GTM pipeline */}
      <path d="M20 20 L240 20 L190 55 L70 55 Z" fill="rgba(61,90,128,0.18)" stroke="rgba(122,163,200,0.25)" strokeWidth="1"/>
      <path d="M70 62 L190 62 L160 97 L100 97 Z" fill="rgba(61,90,128,0.14)" stroke="rgba(122,163,200,0.2)" strokeWidth="1"/>
      <path d="M100 104 L160 104 L145 118 L115 118 Z" fill="rgba(61,90,128,0.22)" stroke="rgba(122,163,200,0.3)" strokeWidth="1"/>
      {/* Segment dots */}
      <circle cx="70" cy="37" r="4" fill="rgba(122,163,200,0.5)"/>
      <circle cx="130" cy="37" r="4" fill="rgba(122,163,200,0.35)"/>
      <circle cx="190" cy="37" r="4" fill="rgba(122,163,200,0.25)"/>
      {/* Arrow */}
      <path d="M130 118 L130 128 M125 123 L130 128 L135 123" stroke="rgba(122,163,200,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'funnel-optimization': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Line chart with upward trend */}
      <polyline points="20,95 60,80 100,70 130,50 165,35 200,18 240,10" stroke="rgba(122,163,200,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="20,95 60,80 100,70 130,50 165,35 200,18 240,10 240,110 20,110 Z" fill="rgba(61,90,128,0.1)"/>
      {/* Grid lines */}
      <line x1="20" y1="30" x2="240" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <line x1="20" y1="60" x2="240" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <line x1="20" y1="90" x2="240" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      {/* Highlight dots */}
      <circle cx="100" cy="70" r="4" fill="rgba(122,163,200,0.5)" stroke="rgba(122,163,200,0.8)" strokeWidth="1.5"/>
      <circle cx="200" cy="18" r="4" fill="rgba(122,163,200,0.6)" stroke="rgba(122,163,200,0.9)" strokeWidth="1.5"/>
      {/* Label */}
      <text x="205" y="14" fill="rgba(122,163,200,0.6)" fontSize="9" fontFamily="sans-serif">38%</text>
    </svg>
  ),
  'ops-efficiency-model': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* System nodes - delivery ops network */}
      <circle cx="50" cy="60" r="18" fill="rgba(61,90,128,0.2)" stroke="rgba(122,163,200,0.3)" strokeWidth="1.5"/>
      <circle cx="130" cy="30" r="14" fill="rgba(61,90,128,0.18)" stroke="rgba(122,163,200,0.25)" strokeWidth="1.5"/>
      <circle cx="130" cy="90" r="14" fill="rgba(61,90,128,0.18)" stroke="rgba(122,163,200,0.25)" strokeWidth="1.5"/>
      <circle cx="210" cy="60" r="18" fill="rgba(61,90,128,0.22)" stroke="rgba(122,163,200,0.35)" strokeWidth="1.5"/>
      {/* Connections */}
      <line x1="68" y1="52" x2="116" y2="36" stroke="rgba(122,163,200,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="68" y1="68" x2="116" y2="84" stroke="rgba(122,163,200,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="144" y1="36" x2="192" y2="52" stroke="rgba(122,163,200,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="144" y1="84" x2="192" y2="68" stroke="rgba(122,163,200,0.3)" strokeWidth="1" strokeDasharray="4 3"/>
      {/* Icons inside nodes */}
      <text x="41" y="64" fill="rgba(122,163,200,0.6)" fontSize="14" fontFamily="sans-serif">🏪</text>
      <text x="122" y="34" fill="rgba(122,163,200,0.6)" fontSize="11" fontFamily="sans-serif">🛵</text>
      <text x="122" y="94" fill="rgba(122,163,200,0.6)" fontSize="11" fontFamily="sans-serif">📦</text>
      <text x="201" y="64" fill="rgba(122,163,200,0.6)" fontSize="14" fontFamily="sans-serif">🧑</text>
    </svg>
  ),
}

const bentoCards = caseStudies.map(cs => ({
  slug: cs.slug,
  label: cs.tag,
  title: cs.title,
  description: cs.subtitle,
  tagColor: cs.tagColor,
  accentColor: cs.accentColor,
  color: '#0d1117',
  illustration: ILLUSTRATIONS[cs.slug] ?? null,
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
