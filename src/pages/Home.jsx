import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitText from '../components/SplitText'
import Silk from '../components/Silk'
import ContactModal from '../components/ContactModal'
import { caseStudyContent } from '../data/caseStudyContent'
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
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, revealed]
}

function WorkCard({ cs, to, linkLabel }) {
  return (
    <Link to={to} className="home-card">
      <div className="home-card__inner">
        <span
          className="home-card__tag"
          style={{ background: cs.tagColor, color: cs.accentColor }}
        >
          {cs.tag}
        </span>
        <h3 className="home-card__title">{cs.title}</h3>
        <p className="home-card__hook">{cs.hook}</p>
        <span className="home-card__link" style={{ color: cs.accentColor }}>
          {linkLabel} →
        </span>
      </div>
    </Link>
  )
}

export default function Home() {
  const [showContact, setShowContact] = useState(false)
  const [csRef, csRevealed] = useReveal()
  const [execRef, execRevealed] = useReveal()

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__silk-bg" aria-hidden="true">
          <Silk
            speed={3}
            scale={1.2}
            color="#f97316"
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
              Strategy, AI workflows, and ops efficiency - built from first principles.
            </p>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">Impact</span>
                <span className="hero__stat-label">Driven</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">Business</span>
                <span className="hero__stat-label">Strategy</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">AI</span>
                <span className="hero__stat-label">Workflows</span>
              </div>
            </div>

            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => {
                document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                View Case Studies
              </button>
              <button className="btn btn--ghost" onClick={() => setShowContact(true)}>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section A: Case Studies */}
      <section
        id="case-studies"
        ref={csRef}
        className={`home-section ${csRevealed ? 'home-section--revealed' : ''}`}
      >
        <div className="home-section__meta">
          <p className="home-section__label">Section A</p>
          <h2 className="home-section__title">Case Studies</h2>
          <p className="home-section__desc">
            Self-directed case studies - structured problem-to-system thinking, built independently.
          </p>
        </div>

        <div className="home-cards">
          {caseStudyContent.map(cs => (
            <WorkCard
              key={cs.slug}
              cs={cs}
              to={`/case-studies/${cs.slug}`}
              linkLabel="Read case study"
            />
          ))}
        </div>
      </section>

      {/* Section B: Execution & Analysis */}
      <section
        id="execution"
        ref={execRef}
        className={`home-section home-section--alt ${execRevealed ? 'home-section--revealed' : ''}`}
      >
        <div className="home-section__meta">
          <p className="home-section__label">Section B</p>
          <h2 className="home-section__title">Execution & Analysis</h2>
          <p className="home-section__desc">
            For each idea: business requirements, functional requirements, and A/B test design - one scrollable page per case.
          </p>
        </div>

        <div className="home-cards">
          {caseStudyContent.map(cs => (
            <WorkCard
              key={cs.slug}
              cs={cs}
              to={`/execution/${cs.slug}`}
              linkLabel="View requirements & tests"
            />
          ))}
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </main>
  )
}
