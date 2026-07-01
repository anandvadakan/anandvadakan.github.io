import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'
import SplashCursor from './components/SplashCursor'

export default function App() {
  return (
    <>
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#8b3a2a"
        DENSITY_DISSIPATION={4}
        VELOCITY_DISSIPATION={2.5}
        SPLAT_RADIUS={0.18}
        CURL={4}
      />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:slug" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
