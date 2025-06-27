import { useState } from 'react'
import styles from './projects.module.css'

// Projects data structure
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    projectInfo: "A full-stack e-commerce solution with modern UI/UX design, featuring user authentication, payment integration, and real-time inventory management. Built with focus on performance and scalability.",
    techInfo: "React, Node.js, MongoDB, Stripe API, Redux Toolkit, Express.js, JWT Authentication, Cloudinary for image management",
    image: "🛒", // Placeholder - replace with actual image path
    link: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 2,
    title: "3D Portfolio Website",
    projectInfo: "An immersive 3D portfolio showcasing creative projects with interactive elements and smooth animations. Features responsive design and optimized performance across devices.",
    techInfo: "React Three Fiber, GSAP, Three.js, Blender for 3D models, Framer Motion, Tailwind CSS",
    image: "🎨", // Placeholder - replace with actual image path
    link: "https://github.com/yourusername/3d-portfolio"
  },
  {
    id: 3,
    title: "AI Chat Application",
    projectInfo: "Real-time chat application with AI integration for smart responses and conversation analysis. Includes message encryption and multi-language support.",
    techInfo: "Next.js, Socket.io, OpenAI API, PostgreSQL, Prisma ORM, NextAuth.js, Redis for caching",
    image: "🤖", // Placeholder - replace with actual image path
    link: "https://github.com/yourusername/ai-chat-app"
  },
  {
    id: 4,
    title: "Weather Analytics Dashboard",
    projectInfo: "Comprehensive weather dashboard with data visualization, forecasting, and historical analysis. Features interactive charts and location-based weather tracking.",
    techInfo: "Vue.js, D3.js, Chart.js, Weather API, Firebase, Vuex, CSS Grid, Progressive Web App",
    image: "🌤️", // Placeholder - replace with actual image path
    link: "https://github.com/yourusername/weather-dashboard"
  },
  {
    id: 5,
    title: "Task Management System",
    projectInfo: "Collaborative project management tool with team features, time tracking, and progress analytics. Designed for remote teams with real-time synchronization.",
    techInfo: "React, TypeScript, Supabase, Tailwind CSS, React Query, Zustand, React Hook Form",
    image: "📋", // Placeholder - replace with actual image path
    link: "https://github.com/yourusername/task-manager"
  }
]

function ProjectsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState('right')
  const [textVisible, setTextVisible] = useState(true)
  const [imageTransform, setImageTransform] = useState('translateX(0)')

  const currentProject = projectsData[currentIndex]

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('right')
    setTextVisible(false)
    
    // Slide current image out to the right
    setImageTransform('translateX(100%)')
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length)
      // Position new image off-screen to the left
      setImageTransform('translateX(-100%)')
    }, 150)
    
    setTimeout(() => {
      // Slide new image in from the left
      setImageTransform('translateX(0)')
      setTextVisible(true)
    }, 160) // Small delay to ensure positioning
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDirection('left')
    setTextVisible(false)
    
    // Slide current image out to the left
    setImageTransform('translateX(-100%)')
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length)
      // Position new image off-screen to the right
      setImageTransform('translateX(100%)')
    }, 150)
    
    setTimeout(() => {
      // Slide new image in from the right
      setImageTransform('translateX(0)')
      setTextVisible(true)
    }, 160) // Small delay to ensure positioning
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div className={styles['projects-container']}>
      <div className={styles['projects-header']}>
        <h1>MY PROJECTS</h1>
      </div>
      
      <div className={styles['projects-content']}>
        {/* Left Section - Image/Icon */}
        <div className={styles['image-section']}>
          <div className={styles['image-container']}>
            <div 
              className={styles['project-image']}
              style={{ 
                transform: imageTransform,
                opacity: imageTransform === 'translateX(0)' ? 1 : 0
              }}
              key={currentProject.id}
            >
              <div className={styles['image-placeholder']}>
                {currentProject.image}
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className={styles['nav-buttons']}>
            <button 
              className={styles['nav-btn']} 
              onClick={handlePrev}
              disabled={isAnimating}
            >
              <span className={styles['arrow-left']}>‹</span>
            </button>
            <button 
              className={styles['nav-btn']} 
              onClick={handleNext}
              disabled={isAnimating}
            >
              <span className={styles['arrow-right']}>›</span>
            </button>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className={styles['text-section']}>
          <div className={`${styles['project-content']} ${textVisible ? styles['text-fade-in'] : styles['text-fade-out']}`}>
            <h2 className={styles['project-title']}>{currentProject.title}</h2>
            
            <div className={styles['info-section']}>
              <h3>Project Info:</h3>
              <p>{currentProject.projectInfo}</p>
            </div>
            
            <div className={styles['tech-section']}>
              <h3>Tech Info:</h3>
              <p>{currentProject.techInfo}</p>
            </div>
            
            <div className={styles['project-link']}>
              <a 
                href={currentProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles['link-button']}
              >
                View Project →
              </a>
            </div>
          </div>
          
          {/* Project Counter */}
          <div className={`${styles['project-counter']} ${textVisible ? styles['text-fade-in'] : styles['text-fade-out']}`}>
            {currentIndex + 1} / {projectsData.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsComponent