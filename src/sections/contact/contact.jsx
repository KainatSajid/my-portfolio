import { useState } from 'react'
import styles from './contact.module.css'




function ContactComponent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles['contact-container']}>
        <h1>Contact Component</h1>
      </div>

    </>
  )
}

export default ContactComponent
