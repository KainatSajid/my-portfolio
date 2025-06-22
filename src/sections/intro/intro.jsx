// intro.jsx
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './intro.module.css'

gsap.registerPlugin(ScrollTrigger)

function IntroComponent() {
  const containerRef = useRef(null)
  const panelWrapperRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !panelWrapperRef.current) return

    const container = containerRef.current
    const panelWrapper = panelWrapperRef.current
    const panels = panelWrapper.querySelectorAll(`.${styles.panel}`)
    const firstPanel = panels[0]

    // Set first panel opacity to 0 initially for fade-in effect
    gsap.set(firstPanel, { opacity: 0 })

    // Fade-in animation for first panel
    gsap.to(firstPanel, {
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
    })

    // Calculate total scroll distance based on number of panels
    const totalPanels = panels.length
    const scrollDistance = (totalPanels - 1) * window.innerWidth

    // Create a single timeline for better performance
    const pauseDuration = scrollDistance * 0.8 // Pause duration (adjust multiplier for longer/shorter pause)
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${scrollDistance * 2.5 + pauseDuration}`, // Added pause duration
        anticipatePin: 1,
        onUpdate: (self) => {
          // Optional: Add any custom logic during scroll
          const progress = self.progress
          
          // Show pause state when we're in the pause zone (after parallax completes)
          if (progress > 0.75) { // Adjust this threshold as needed
            // Optional: Add any visual feedback for pause state
            container.style.setProperty('--pause-opacity', '1')
          } else {
            container.style.setProperty('--pause-opacity', '0')
          }
        }
      }
    })

    // MAIN TEXT PANELS - Normal speed (100%)
    // Complete parallax animation in first 75% of scroll, then pause
    tl.to(panels, {
      x: -scrollDistance,
      ease: 'none',
      duration: 0.75 // Ends at 75% of timeline
    }, 0)

    // BACKGROUND PARALLAX ELEMENTS (slower than main content)
    // All complete by 75% of timeline
    tl.to(`.${styles['bg-slowest']}`, {
      x: -scrollDistance * 0.3,
      ease: 'none',
      duration: 0.75
    }, 0)

    tl.to(`.${styles['bg-medium']}`, {
      x: -scrollDistance * 0.5,
      ease: 'none',
      duration: 0.75
    }, 0)

    tl.to(`.${styles['bg-fast']}`, {
      x: -scrollDistance * 0.7,
      ease: 'none',
      duration: 0.75
    }, 0)

    // FOREGROUND PARALLAX ELEMENTS (faster than main content)
    // All complete by 75% of timeline
    tl.to(`.${styles['fg-medium']}`, {
      x: -scrollDistance * 1.3,
      ease: 'none',
      duration: 0.75
    }, 0)

    tl.to(`.${styles['fg-fast']}`, {
      x: -scrollDistance * 1.6,
      ease: 'none',
      duration: 0.75
    }, 0)

    tl.to(`.${styles['fg-fastest']}`, {
      x: -scrollDistance * 2.0,
      ease: 'none',
      duration: 0.75
    }, 0)

    // Additional subtle animations for enhanced parallax effect
    tl.to(`.${styles['bg-circle-1']}`, {
      rotation: 360,
      scale: 1.2,
      ease: 'none',
      duration: 0.75
    }, 0)

    tl.to(`.${styles['bg-circle-2']}`, {
      rotation: -180,
      scale: 0.8,
      ease: 'none',
      duration: 0.75
    }, 0)

    // PAUSE PHASE - From 75% to 100% of timeline
    // Add a subtle breathing animation during pause
    tl.to(`.${styles['foreground-image']}`, {
      scale: 1.05,
      ease: 'power2.inOut',
      duration: 0.125
    }, 0.75)
    
    tl.to(`.${styles['foreground-image']}`, {
      scale: 1,
      ease: 'power2.inOut',
      duration: 0.125
    }, 0.875)

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh()

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      tl.kill()
    }
  }, [])

  return (
    <div className={styles['intro-container']} ref={containerRef}>
      <div className={styles['panel-wrapper']} ref={panelWrapperRef}>

        {/* BACKGROUND PARALLAX ELEMENTS (z-index: 1-3, slower speeds) */}
        <div className={`${styles['parallax-element']} ${styles['bg-slowest']} ${styles['bg-circle-1']}`}></div>
        <div className={`${styles['parallax-element']} ${styles['bg-medium']} ${styles['bg-circle-2']}`}></div>
        <div className={`${styles['parallax-element']} ${styles['bg-fast']} ${styles['bg-shape-1']}`}>
          <div className={styles['image-placeholder']}>🌟</div>
        </div>
        <div className={`${styles['parallax-element']} ${styles['bg-slowest']} ${styles['bg-shape-2']}`}>
          <div className={styles['image-placeholder']}>✨</div>
        </div>
        <div className={`${styles['parallax-element']} ${styles['bg-medium']} ${styles['bg-shape-3']}`}>
          <div className={styles['image-placeholder']}>🎭</div>
        </div>
        <div className={`${styles['parallax-element']} ${styles['bg-fast']} ${styles['bg-shape-4']}`}>
          <div className={styles['image-placeholder']}>🌙</div>
        </div>

        {/* MAIN TEXT PANELS (z-index: 5, normal speed) */}
        <div className={styles.panel}>
          <div className={styles['panel-content']}>
            <h1>Panel 1</h1>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles['panel-content']}>
            <h1>Panel 2</h1>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles['panel-content']}>
            <h1>Panel 3</h1>
          </div>
        </div>

        {/* FOREGROUND PARALLAX ELEMENTS (z-index: 8-10, faster speeds) */}
        <div className={`${styles['parallax-element']} ${styles['fg-medium']} ${styles['fg-element-1']}`}>
          <div className={styles['foreground-image']}>🎨</div>
        </div>
        <div className={`${styles['parallax-element']} ${styles['fg-fast']} ${styles['fg-element-2']}`}>
          <div className={styles['foreground-image']}>💻</div>
        </div>
        <div className={`${styles['parallax-element']} ${styles['fg-fastest']} ${styles['fg-element-3']}`}>
          <div className={styles['foreground-image']}>⚡</div>
        </div>
        <div className={`${styles['parallax-element']} ${styles['fg-medium']} ${styles['fg-element-4']}`}>
          <div className={styles['foreground-image']}>🚀</div>
        </div>
        <div className={`${styles['parallax-element']} ${styles['fg-fast']} ${styles['fg-element-5']}`}>
          <div className={styles['foreground-image']}>🌈</div>
        </div>
        <div className={`${styles['parallax-element']} ${styles['fg-fastest']} ${styles['fg-element-6']}`}>
          <div className={styles['foreground-image']}>✨</div>
        </div>

      </div>
    </div>
  )
}

export default IntroComponent