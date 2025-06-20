import { useState } from 'react'
import './intro.module.css'




function IntroComponent() {
  const [count, setCount] = useState(0)

  const containerRef = useRef(null)
  const panelWrapperRef = useRef(null)

  // useEffect(() => {
  //   const panels = gsap.utils.toArray('.panel')

  //   gsap.to(panels, {
  //     xPercent: -100 * (panels.length - 1),
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       pin: true,
  //       scrub: 1,
  //       end: () => '+=' + panelWrapperRef.current.scrollWidth,
  //     },
  //   })
  // }, [])

  return (
    <>
      <div>
        <h1>Intro Component</h1>
      </div>

      {/* <div className="intro-container" ref={containerRef}>

      </div> */}

    </>
  )
}

export default IntroComponent
