import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CardSwap, { Card } from '../components/CardSwap'
import ContactModal from '../components/ContactModal'
import ProfileCard from '../components/ProfileCard'
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
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, revealed]
}

export default function Home() {
  const [showContact, setShowContact] = useState(false)
  const [csRef, csRevealed] = useReveal()

  return (
    <main className="home">
      <div className="hero-glow" aria-hidden="true" />

      <section className="hero">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for new projects
          </div>

          <h1 className="hero__name">Anand V</h1>

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

        <div className="hero__card-col">
          <ProfileCard
            avatarUrl={`${import.meta.env.BASE_URL}anand.jpg`}
            name="Anand V"
            title="GTM Engineer"
            handle="anandvadakan"
            status="Open to work"
            contactText="Connect"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowEnabled={true}
            behindGlowColor="rgba(61, 90, 128, 0.45)"
            innerGradient="linear-gradient(160deg, #1a2236 0%, #0d1117 60%, #111828 100%)"
            onContactClick={() => setShowContact(true)}
          />
        </div>
      </section>

      <section ref={csRef} className={`case-studies-section ${csRevealed ? 'cs--revealed' : ''}`}>
        <div className="cs-section__meta">
          <p className="cs-section__label">Selected Work</p>
          <h2 className="cs-section__title">Case Studies</h2>
          <p className="cs-section__desc">
            Real engagements. Measurable outcomes. Each project tackles a specific growth or operations challenge from first principles.
          </p>
          <Link to="/works" className="cs-section__link">
            View all works <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="cs-section__swap-area">
          <CardSwap
            width={380}
            height={300}
            cardDistance={60}
            verticalDistance={68}
            delay={4000}
            pauseOnHover
            skewAmount={5}
            easing="elastic"
          >
            {caseStudies.map((cs) => (
              <Card key={cs.slug} customClass="case-card">
                <Link to={`/works/${cs.slug}`} className="case-card__inner">
                  <span
                    className="case-card__tag"
                    style={{ background: cs.tagColor, color: cs.accentColor }}
                  >
                    {cs.tag}
                  </span>
                  <h3 className="case-card__title">{cs.title}</h3>
                  <p className="case-card__sub">{cs.subtitle}</p>
                  <span className="case-card__cta" style={{ color: cs.accentColor }}>
                    Read case study -&gt;
                  </span>
                </Link>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </main>
  )
}
