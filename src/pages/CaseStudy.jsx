import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import './CaseStudy.css'

function NotionIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933z" />
    </svg>
  )
}

function StandardCaseStudy({ cs }) {
  return (
    <div className="cs__body">
      <section className="cs__section">
        <h2 className="cs__section-title">Overview</h2>
        <p>{cs.summary}</p>
      </section>
      <section className="cs__section">
        <h2 className="cs__section-title">The Problem</h2>
        <p>{cs.problem}</p>
      </section>
      <section className="cs__section">
        <h2 className="cs__section-title">Approach</h2>
        <ul className="cs__list">
          {cs.approach.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="cs__section cs__outcome">
        <h2 className="cs__section-title">Outcome</h2>
        <p>{cs.outcome}</p>
      </section>
      {cs.externalUrl && (
        <a
          href={cs.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cs__medium-link"
          style={{ borderColor: cs.accentColor, color: cs.accentColor }}
        >
          Full original writeup on Medium →
        </a>
      )}
    </div>
  )
}

function SolutionItem({ text }) {
  const colonIdx = text.indexOf(':')
  if (colonIdx === -1) return <li className="cs__sol-item">{text}</li>
  const label = text.slice(0, colonIdx)
  const body = text.slice(colonIdx + 1).trim()
  return (
    <li className="cs__sol-item">
      <span className="cs__sol-label">{label}</span>
      <span className="cs__sol-body">{body}</span>
    </li>
  )
}

function OpsEfficiencyDetail({ cs }) {
  const [active, setActive] = useState(0)
  const sub = cs.caseStudies[active]

  return (
    <div className="cs__body">
      <section className="cs__section">
        <p className="cs__summary">{cs.summary}</p>
        <p className="cs__context">{cs.context}</p>
      </section>

      <div className="cs__tabs">
        {cs.caseStudies.map((s, i) => (
          <button
            key={i}
            className={`cs__tab${active === i ? ' cs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="cs__tab-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="cs__tab-label">{s.title}</span>
          </button>
        ))}
      </div>

      <div className="cs__sub-content">
        <p className="cs__sub-meta">{sub.meta}</p>

        <section className="cs__section">
          <h3 className="cs__section-title">The Problem</h3>
          {sub.problem.split('\n\n').map((para, j) => (
            <p key={j}>{para}</p>
          ))}
        </section>

        <section className="cs__section">
          <h3 className="cs__section-title">Solution Design</h3>
          <ul className="cs__sol-list">
            {sub.solution.map((item, j) => (
              <SolutionItem key={j} text={item} />
            ))}
          </ul>
        </section>

        <section className="cs__section cs__outcome">
          <h3 className="cs__section-title">Expected Impact</h3>
          <p>{sub.outcome}</p>
        </section>
      </div>

      <a
        href={cs.notionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cs__notion-link"
        style={{ borderColor: cs.accentColor, color: cs.accentColor }}
      >
        <NotionIcon />
        Read full case study on Notion
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    return (
      <main className="cs-not-found">
        <p>Case study not found.</p>
        <Link to="/works">- Back to Works</Link>
      </main>
    )
  }

  return (
    <main className="cs">
      <div className="cs__back">
        <Link to="/works" className="cs__back-link">← Works</Link>
      </div>

      <header className="cs__header">
        <span
          className="cs__tag"
          style={{ background: cs.tagColor, color: cs.accentColor }}
        >
          {cs.tag}
        </span>
        <h1 className="cs__title">{cs.title}</h1>
        <p className="cs__subtitle">{cs.subtitle}</p>
      </header>

      {cs.caseStudies ? (
        <OpsEfficiencyDetail cs={cs} />
      ) : (
        <StandardCaseStudy cs={cs} />
      )}
    </main>
  )
}
