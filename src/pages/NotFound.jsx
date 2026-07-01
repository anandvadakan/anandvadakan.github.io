import React from 'react'
import { Link } from 'react-router-dom'
import FaultyTerminal from '../components/FaultyTerminal'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf__bg">
        <FaultyTerminal
          scale={1.2}
          gridMul={[2, 1]}
          digitSize={1.4}
          timeScale={0.25}
          scanlineIntensity={0.4}
          glitchAmount={1.2}
          flickerAmount={0.8}
          noiseAmp={0.6}
          chromaticAberration={0}
          curvature={0}
          tint="#3d5a80"
          mouseReact={true}
          mouseStrength={0.3}
          pageLoadAnimation={true}
          brightness={0.55}
        />
      </div>

      <div className="nf__content">
        <p className="nf__code">404</p>
        <h1 className="nf__title">Page not found</h1>
        <p className="nf__desc">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="nf__home">
          Go back home
        </Link>
      </div>
    </main>
  )
}
