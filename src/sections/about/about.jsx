import { useState } from 'react'
import styles from './about.module.css'



function AboutComponent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles['about-container']} >
        <div>
          <h1>About Component</h1>
        </div>
      </div>
    </>
  )
}

export default AboutComponent
