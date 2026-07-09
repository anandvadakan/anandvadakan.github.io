import React from 'react'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import './Works.css'

export default function Works() {
  return (
    <main className="works">
      <div className="works__header">
        <h1 className="works__title">Works</h1>
        <p className="works__subtitle">
          A collection of strategy engagements, analytics projects, and operational frameworks.
        </p>
      </div>

      <div className="works__grid">
        {caseStudies.map((cs, i) => (
          <Link to={`/works/${cs.slug}`} key={cs.slug} className="work-card">
            <div className="work-card__num">{String(i + 1).padStart(2, '0')}</div>
            <div className="work-card__body">
              <span className="work-card__tag" style={{ background: cs.tagColor, color: cs.accentColor }}>{cs.tag}</span>
              <h2 className="work-card__title">{cs.title}</h2>
              <p className="work-card__summary">{cs.summary}</p>
              <span className="work-card__link" style={{ color: cs.accentColor }}>Read case study →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
