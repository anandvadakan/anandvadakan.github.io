import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitText from '../components/SplitText'
import Silk from '../components/Silk'
import MagicBento from '../components/MagicBento'
import ContactModal from '../components/ContactModal'
import { caseStudies } from '../data/caseStudies'
import './Home.css'

const ROLES = ['Business Analyst', 'Product Analyst', 'AI Workflows']

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
  'cancellations-revenue': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Drop - cancellation event */}
      <polyline points="20,30 75,30 90,80" stroke="rgba(180,80,80,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Recovery arc back up */}
      <polyline points="90,80 130,65 175,40 240,18" stroke="rgba(80,180,120,0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Shaded recovery area */}
      <polyline points="90,80 130,65 175,40 240,18 240,110 90,110 Z" fill="rgba(45,106,79,0.18)"/>
      {/* Grid lines */}
      <line x1="20" y1="30" x2="240" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <line x1="20" y1="60" x2="240" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <line x1="20" y1="90" x2="240" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Cancellation dot */}
      <circle cx="90" cy="80" r="5" fill="rgba(180,80,80,0.9)" stroke="rgba(220,120,120,0.9)" strokeWidth="1.5"/>
      {/* Recovery dot */}
      <circle cx="175" cy="40" r="5" fill="rgba(80,180,120,0.9)" stroke="rgba(120,210,160,0.9)" strokeWidth="1.5"/>
      {/* Labels */}
      <text x="62" y="92" fill="rgba(220,120,120,0.85)" fontSize="8" fontFamily="sans-serif" fontWeight="600">CANCEL</text>
      <text x="180" y="36" fill="rgba(80,200,130,0.9)" fontSize="8" fontFamily="sans-serif" fontWeight="600">RECOVER</text>
    </svg>
  ),
  'delay-accountability': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Donut - Restaurant ~40%, top-right, red */}
      <path d="M130 18 A42 42 0 0 1 166 81" stroke="rgba(200,90,90,0.85)" strokeWidth="12" strokeLinecap="butt" fill="none"/>
      {/* Donut - Platform ~40%, top-left, blue */}
      <path d="M130 18 A42 42 0 0 0 94 81" stroke="rgba(80,120,180,0.85)" strokeWidth="12" strokeLinecap="butt" fill="none"/>
      {/* Donut - External ~20%, bottom, grey */}
      <path d="M94 81 A42 42 0 0 0 166 81" stroke="rgba(120,120,150,0.7)" strokeWidth="12" strokeLinecap="butt" fill="none"/>
      {/* Inner donut hole */}
      <circle cx="130" cy="60" r="28" fill="#0d1117"/>
      {/* Leader lines */}
      <line x1="154" y1="32" x2="178" y2="18" stroke="rgba(200,90,90,0.5)" strokeWidth="1"/>
      <line x1="106" y1="32" x2="82" y2="18" stroke="rgba(80,120,180,0.5)" strokeWidth="1"/>
      <line x1="130" y1="102" x2="130" y2="115" stroke="rgba(120,120,150,0.5)" strokeWidth="1"/>
      {/* Labels outside */}
      <text x="180" y="20" fill="rgba(220,110,110,0.9)" fontSize="8.5" fontFamily="sans-serif" fontWeight="700">RESTAURANT</text>
      <text x="22" y="20" fill="rgba(100,150,220,0.9)" fontSize="8.5" fontFamily="sans-serif" fontWeight="700">PLATFORM</text>
      <text x="105" y="119" fill="rgba(150,150,180,0.85)" fontSize="8.5" fontFamily="sans-serif" fontWeight="700">EXTERNAL</text>
    </svg>
  ),
  'organic-food-gtm': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Leaf accent */}
      <path d="M32 78 Q18 60 20 36 Q38 20 52 32 Q62 44 50 66 Q43 76 32 78Z" fill="rgba(58,125,68,0.3)" stroke="rgba(100,180,100,0.65)" strokeWidth="1.2"/>
      <path d="M32 78 Q34 58 30 34" stroke="rgba(100,180,100,0.55)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M30 52 Q22 47 20 40" stroke="rgba(100,180,100,0.35)" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M31 64 Q23 60 20 54" stroke="rgba(100,180,100,0.3)" strokeWidth="0.8" strokeLinecap="round"/>
      {/* D2C bar - longest */}
      <text x="76" y="36" fill="rgba(100,180,100,0.75)" fontSize="8" fontFamily="sans-serif" fontWeight="600">D2C</text>
      <rect x="76" y="40" width="148" height="10" rx="2" fill="rgba(58,125,68,0.45)" stroke="rgba(100,180,100,0.55)" strokeWidth="1"/>
      {/* Retail bar - medium */}
      <text x="76" y="64" fill="rgba(100,180,100,0.75)" fontSize="8" fontFamily="sans-serif" fontWeight="600">RETAIL</text>
      <rect x="76" y="68" width="100" height="10" rx="2" fill="rgba(58,125,68,0.35)" stroke="rgba(100,180,100,0.45)" strokeWidth="1"/>
      {/* Quick Commerce bar - shortest */}
      <text x="76" y="92" fill="rgba(100,180,100,0.75)" fontSize="8" fontFamily="sans-serif" fontWeight="600">QUICK COMM</text>
      <rect x="76" y="96" width="62" height="10" rx="2" fill="rgba(58,125,68,0.25)" stroke="rgba(100,180,100,0.35)" strokeWidth="1"/>
    </svg>
  ),
  'ops-efficiency-model': (
    <svg viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* System nodes - delivery ops network */}
      <circle cx="50" cy="60" r="20" fill="rgba(61,90,128,0.5)" stroke="rgba(122,163,200,0.8)" strokeWidth="1.5"/>
      <circle cx="130" cy="28" r="16" fill="rgba(61,90,128,0.45)" stroke="rgba(122,163,200,0.7)" strokeWidth="1.5"/>
      <circle cx="130" cy="92" r="16" fill="rgba(61,90,128,0.45)" stroke="rgba(122,163,200,0.7)" strokeWidth="1.5"/>
      <circle cx="210" cy="60" r="20" fill="rgba(61,90,128,0.5)" stroke="rgba(122,163,200,0.8)" strokeWidth="1.5"/>
      {/* Connections */}
      <line x1="70" y1="52" x2="114" y2="34" stroke="rgba(122,163,200,0.65)" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="70" y1="68" x2="114" y2="86" stroke="rgba(122,163,200,0.65)" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="146" y1="34" x2="190" y2="52" stroke="rgba(122,163,200,0.65)" strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="146" y1="86" x2="190" y2="68" stroke="rgba(122,163,200,0.65)" strokeWidth="1.5" strokeDasharray="4 3"/>
      {/* Icons inside nodes */}
      <text x="39" y="65" fill="rgba(255,255,255,0.9)" fontSize="16" fontFamily="sans-serif">🏪</text>
      <text x="121" y="33" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="sans-serif">🛵</text>
      <text x="121" y="97" fill="rgba(255,255,255,0.9)" fontSize="13" fontFamily="sans-serif">📦</text>
      <text x="199" y="65" fill="rgba(255,255,255,0.9)" fontSize="16" fontFamily="sans-serif">🧑</text>
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
              Turning ambiguous business problems into structured requirements and decisions.
            </p>
            <p className="hero__desc hero__desc--secondary">
              Strategy.
            </p>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">Impact</span>
                <span className="hero__stat-label">Driven</span>
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
            Self-directed case studies - structured problem-to-system thinking, built independently.
          </p>
          <Link to="/works" className="cs-section__link">
            View all works <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="cs-section__bento">
          <MagicBento
            cards={bentoCards}
            onCardClick={slug => navigate(`/works/${slug}`)}
            enableStars={false}
            enableSpotlight={false}
            enableBorderGlow={false}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
            glowColor="61, 90, 128"
            particleCount={0}
            spotlightRadius={0}
          />
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </main>
  )
}
