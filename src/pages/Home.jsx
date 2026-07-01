import React from 'react'
import { Link } from 'react-router-dom'
import CardSwap, { Card } from '../components/CardSwap'
import { caseStudies } from '../data/caseStudies'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__text">
          <h1 className="hero__name">Anand V</h1>
          <p className="hero__roles">
            <span>GTM Engineer</span>
            <span className="hero__dot" />
            <span>Strategy</span>
            <span className="hero__dot" />
            <span>AI Workflow</span>
          </p>
          <p className="hero__desc">
            I design structured, data-driven strategies that help businesses grow efficiently and make better decisions.
          </p>
          <p className="hero__desc">
            My work focuses on simplifying complexity, improving systems, and solving real-world business problems.
          </p>
          <div className="hero__actions">
            <Link to="/works" className="btn btn--primary">View Works</Link>
            <Link to="/contact" className="btn btn--ghost">Get in touch</Link>
          </div>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="cs-section__meta">
          <p className="cs-section__label">Selected Work</p>
          <h2 className="cs-section__title">Case Studies</h2>
          <p className="cs-section__desc">
            Real engagements. Measurable outcomes. Each project tackles a specific growth or operations challenge from first principles.
          </p>
          <Link to="/works" className="cs-section__link">
            View all works <span aria-hidden="true">→</span>
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
                    Read case study →
                  </span>
                </Link>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>
    </main>
  )
}
