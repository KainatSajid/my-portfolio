import { useState } from 'react'
import styles from './projects.module.css'



function ProjectsComponent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles['projects-container']}> 
        <h1>Projects Component</h1>
      </div>

    </>
  )
}

export default ProjectsComponent
