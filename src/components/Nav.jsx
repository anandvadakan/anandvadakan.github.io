import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PillNav from './PillNav'
import './Nav.css'

const NAV_ITEMS = [
  { label: 'Home',    href: '/' },
  { label: 'Works',   href: '/works' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeHref = NAV_ITEMS.find(item =>
    item.href === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(item.href)
  )?.href

  const visibleItems = NAV_ITEMS.filter(item => item.href !== activeHref)

  return (
    <>
      <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <a href="/" className="nav__brand"></a>
      </header>
      <PillNav
        items={visibleItems}
        activeHref={activeHref}
        baseColor="#18160f"
        pillColor="#f97316"
        hoveredPillTextColor="#f97316"
        pillTextColor="#fff"
        ease="power3.easeOut"
        initialLoadAnimation={true}
      />
    </>
  )
}
