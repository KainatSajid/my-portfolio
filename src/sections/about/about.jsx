import { useState } from 'react'
import styles from './about.module.css'

function AboutComponent() {
  const [hoveredButton, setHoveredButton] = useState(null)

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicked!`)
    // Add your click handlers here
    // Example: navigate to different sections, open modals, etc.
  }

  return (
    <div className={styles['about-container']}>
      <div className={styles['about-content']}>
        {/* Header Section */}
        <div className={styles['about-header']}>
          <h1>About Me</h1>
          <p className={styles['about-description']}>
            I'm a passionate developer who loves creating immersive digital experiences. 
            With expertise in modern web technologies and 3D graphics, I bring ideas to life 
            through clean code and innovative design. Always learning, always building.
          </p>
        </div>

        {/* Interactive Buttons Section */}
        <div className={styles['buttons-section']}>
          {/* Left Button */}
          <div 
            className={`${styles['button-container']} ${styles['left-button']}`}
            onMouseEnter={() => setHoveredButton('button1')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => handleButtonClick('Button 1')}
          >
            <div className={`${styles['button-image']} ${hoveredButton === 'button1' ? styles['hovered'] : ''}`}>
              <div className={styles['image-placeholder']}>
                🎯
              </div>
            </div>
            <div className={`${styles['button-text']} ${hoveredButton === 'button1' ? styles['text-hovered'] : ''}`}>
              Skills & Expertise
            </div>
          </div>

          {/* Right Button */}
          <div 
            className={`${styles['button-container']} ${styles['right-button']}`}
            onMouseEnter={() => setHoveredButton('button2')}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => handleButtonClick('Button 2')}
          >
            <div className={`${styles['button-image']} ${hoveredButton === 'button2' ? styles['hovered'] : ''}`}>
              <div className={styles['image-placeholder']}>
                📄
              </div>
            </div>
            <div className={`${styles['button-text']} ${hoveredButton === 'button2' ? styles['text-hovered'] : ''}`}>
              Resume & Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent