import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './intro.module.css'

gsap.registerPlugin(ScrollTrigger)

function IntroComponent() {
  // const [count, setCount] = useState(0)

  const containerRef = useRef(null)
  const panelWrapperRef = useRef(null)

  useEffect(() => {
    const panels = gsap.utils.toArray(containerRef.current.querySelectorAll(`.${styles.panel}`))


    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => '+=' + panelWrapperRef.current.scrollWidth,
      },
    })
  }, [])

  return (
    <>
        <div className={styles['intro-container']} ref={containerRef}>
          <div className={styles['panel-wrapper']} ref={panelWrapperRef}>
            <div className={styles.panel}>Hi,</div>
            <div className={styles.panel}>test 2,</div>
            <div className={styles.panel}>Frontend Engineer</div>
            <div className={styles.panel}>Welcome</div>
            {/* <p>TEST 2</p> */}
          </div>
        </div>
    </>
  )
}

export default IntroComponent
