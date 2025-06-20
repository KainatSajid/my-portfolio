import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './intro.module.css'

gsap.registerPlugin(ScrollTrigger)

function IntroComponent() {
  const containerRef = useRef(null)
  const panelWrapperRef = useRef(null)

useEffect(() => {
  const panelWrapper = panelWrapperRef.current
  const panels = panelWrapper.querySelectorAll(`.${styles.panel}`)
  const firstPanel = panels[0]

  // Set opacity to 0 initially
  gsap.set(firstPanel, { opacity: 0 })

  // Fade in first panel
  const introFade = gsap.to(firstPanel, {
    opacity: 1,
    duration: 1.5,
    ease: 'power2.out',
  })

  // Horizontal scroll
  const scrollTween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: containerRef.current,
      pin: true,
      scrub: 1,
      start: 'top top',
      end: () => '+=' + (panelWrapper.scrollWidth - 1),
      anticipatePin: 1,
    },
  })

  // Refresh to make sure ScrollTrigger calculates correctly
  requestAnimationFrame(() => ScrollTrigger.refresh())

  return () => {
    scrollTween.scrollTrigger?.kill()
  }
}, [])



  return (
    <div className={styles['intro-container']} ref={containerRef}>
      <div className={styles['panel-wrapper']} ref={panelWrapperRef}>
        <div className={styles.panel}>Hi,</div>
        <div className={styles.panel}>test 2,</div>
        <div className={styles.panel}>Frontend Engineer</div>
        <div className={styles.panel}>Welcome</div>
      </div>
    </div>
  )
}

export default IntroComponent
