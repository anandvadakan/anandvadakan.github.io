import { useRef, useEffect, useCallback, useState } from 'react'
import { gsap } from 'gsap'
import './MagicBento.css'

const DEFAULT_PARTICLE_COUNT  = 10
const DEFAULT_SPOTLIGHT_RADIUS = 300
const DEFAULT_GLOW_COLOR = '61, 90, 128'
const MOBILE_BREAKPOINT = 768

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div')
  el.className = 'mb-particle'
  el.style.cssText = `position:absolute;width:4px;height:4px;border-radius:50%;background:rgba(${color},0.9);box-shadow:0 0 6px rgba(${color},0.5);pointer-events:none;z-index:100;left:${x}px;top:${y}px;`
  return el
}

const calcSpotlight = radius => ({ proximity: radius * 0.5, fadeDistance: radius * 0.75 })

const updateGlowProps = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--glow-x', `${((mouseX - rect.left) / rect.width) * 100}%`)
  card.style.setProperty('--glow-y', `${((mouseY - rect.top) / rect.height) * 100}%`)
  card.style.setProperty('--glow-intensity', glow.toString())
  card.style.setProperty('--glow-radius', `${radius}px`)
}

const ParticleCard = ({
  children, className = '', disableAnimations = false, style,
  particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = false, clickEffect = true, enableMagnetism = true, onClick
}) => {
  const cardRef = useRef(null)
  const particlesRef = useRef([])
  const timeoutsRef = useRef([])
  const isHoveredRef = useRef(false)
  const memoRef = useRef([])
  const initRef = useRef(false)
  const magnetRef = useRef(null)

  const initParticles = useCallback(() => {
    if (initRef.current || !cardRef.current) return
    const { width, height } = cardRef.current.getBoundingClientRect()
    memoRef.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    )
    initRef.current = true
  }, [particleCount, glowColor])

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    magnetRef.current?.kill()
    particlesRef.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => p.parentNode?.removeChild(p) })
    })
    particlesRef.current = []
  }, [])

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return
    if (!initRef.current) initParticles()
    memoRef.current.forEach((particle, idx) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return
        const clone = particle.cloneNode(true)
        cardRef.current.appendChild(clone)
        particlesRef.current.push(clone)
        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' })
        gsap.to(clone, { x: (Math.random()-.5)*100, y: (Math.random()-.5)*100, rotation: Math.random()*360, duration: 2+Math.random()*2, ease: 'none', repeat: -1, yoyo: true })
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true })
      }, idx * 100)
      timeoutsRef.current.push(id)
    })
  }, [initParticles])

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return
    const el = cardRef.current

    const onEnter = () => {
      isHoveredRef.current = true
      animateParticles()
      if (enableTilt) gsap.to(el, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 })
    }

    const onLeave = () => {
      isHoveredRef.current = false
      clearParticles()
      if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' })
      if (enableMagnetism) gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' })
    }

    const onMove = e => {
      if (!enableTilt && !enableMagnetism) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left, y = e.clientY - rect.top
      const cx = rect.width / 2, cy = rect.height / 2
      if (enableTilt) gsap.to(el, { rotateX: ((y-cy)/cy)*-8, rotateY: ((x-cx)/cx)*8, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 })
      if (enableMagnetism) { magnetRef.current = gsap.to(el, { x: (x-cx)*0.04, y: (y-cy)*0.04, duration: 0.3, ease: 'power2.out' }) }
    }

    const onClickEl = e => {
      onClick?.()
      if (!clickEffect) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left, y = e.clientY - rect.top
      const maxD = Math.max(Math.hypot(x,y), Math.hypot(x-rect.width,y), Math.hypot(x,y-rect.height), Math.hypot(x-rect.width,y-rect.height))
      const ripple = document.createElement('div')
      ripple.style.cssText = `position:absolute;width:${maxD*2}px;height:${maxD*2}px;border-radius:50%;background:radial-gradient(circle,rgba(${glowColor},0.35) 0%,rgba(${glowColor},0.15) 30%,transparent 70%);left:${x-maxD}px;top:${y-maxD}px;pointer-events:none;z-index:1000;`
      el.appendChild(ripple)
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.7, ease: 'power2.out', onComplete: () => ripple.remove() })
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('click', onClickEl)
    return () => {
      isHoveredRef.current = false
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('click', onClickEl)
      clearParticles()
    }
  }, [animateParticles, clearParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor, onClick])

  return (
    <div ref={cardRef} className={`${className} mb-particle-container`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  )
}

const GlobalSpotlight = ({ gridRef, disableAnimations, enabled, spotlightRadius, glowColor }) => {
  const spotRef = useRef(null)

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return
    const spotlight = document.createElement('div')
    spotlight.className = 'mb-global-spotlight'
    spotlight.style.cssText = `position:fixed;width:700px;height:700px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(${glowColor},0.12) 0%,rgba(${glowColor},0.06) 20%,rgba(${glowColor},0.03) 35%,rgba(${glowColor},0.01) 55%,transparent 70%);z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;`
    document.body.appendChild(spotlight)
    spotRef.current = spotlight

    const onMove = e => {
      if (!spotRef.current || !gridRef.current) return
      const section = gridRef.current.closest('.mb-bento-section')
      const rect = section?.getBoundingClientRect()
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom
      const cards = gridRef.current.querySelectorAll('.magic-bento-card')
      if (!inside) {
        gsap.to(spotRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' })
        cards.forEach(c => c.style.setProperty('--glow-intensity', '0'))
        return
      }
      const { proximity, fadeDistance } = calcSpotlight(spotlightRadius)
      let minDist = Infinity
      cards.forEach(card => {
        const cr = card.getBoundingClientRect()
        const dist = Math.max(0, Math.hypot(e.clientX - (cr.left+cr.width/2), e.clientY - (cr.top+cr.height/2)) - Math.max(cr.width, cr.height)/2)
        minDist = Math.min(minDist, dist)
        const intensity = dist <= proximity ? 1 : dist <= fadeDistance ? (fadeDistance-dist)/(fadeDistance-proximity) : 0
        updateGlowProps(card, e.clientX, e.clientY, intensity, spotlightRadius)
      })
      gsap.to(spotRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' })
      const targetOp = minDist <= proximity ? 0.7 : minDist <= fadeDistance ? ((fadeDistance-minDist)/(fadeDistance-proximity))*0.7 : 0
      gsap.to(spotRef.current, { opacity: targetOp, duration: targetOp > 0 ? 0.2 : 0.5, ease: 'power2.out' })
    }

    const onLeave = () => {
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach(c => c.style.setProperty('--glow-intensity', '0'))
      if (spotRef.current) gsap.to(spotRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      spotRef.current?.parentNode?.removeChild(spotRef.current)
    }
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor])

  return null
}

const MagicBento = ({
  cards = [],
  onCardClick,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const disabled = disableAnimations || isMobile

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight gridRef={gridRef} disableAnimations={disabled} enabled={enableSpotlight} spotlightRadius={spotlightRadius} glowColor={glowColor} />
      )}
      <div className="mb-card-grid mb-bento-section" ref={gridRef}>
        {cards.map((card, i) => {
          const cls = `magic-bento-card ${textAutoHide ? 'magic-bento-card--text-autohide' : ''} ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''}`
          const style = { backgroundColor: card.color || '#0d1117', '--glow-color': glowColor, cursor: 'pointer' }

          const cardInner = (
            <>
              <div className="mb-card__header">
                <span className="mb-card__label" style={{ background: card.tagColor, color: card.accentColor }}>{card.label}</span>
              </div>
              {card.illustration && (
                <div className="mb-card__illustration" aria-hidden="true">
                  {card.illustration}
                </div>
              )}
              <div className="mb-card__content">
                <h3 className="mb-card__title">{card.title}</h3>
                <p className="mb-card__desc">{card.description}</p>
                <span className="mb-card__cta" style={{ color: card.accentColor || `rgba(${glowColor},1)` }}>Read case study -&gt;</span>
              </div>
            </>
          )

          return enableStars ? (
            <ParticleCard
              key={card.slug}
              className={cls}
              style={style}
              disableAnimations={disabled}
              particleCount={particleCount}
              glowColor={glowColor}
              enableTilt={enableTilt}
              clickEffect={clickEffect}
              enableMagnetism={enableMagnetism}
              onClick={() => onCardClick?.(card.slug)}
            >
              {cardInner}
            </ParticleCard>
          ) : (
            <div key={card.slug} className={cls} style={style} onClick={() => onCardClick?.(card.slug)}>
              {cardInner}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MagicBento
