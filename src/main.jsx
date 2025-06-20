import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import IntroComponent from './sections/intro/intro.jsx'
import ProjectsComponent from './sections/projects/projects.jsx'
import AboutComponent from './sections/about/about.jsx'
import ContactComponent from './sections/contact/contact.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <IntroComponent/>
      <div style={{ height: '300vh', background: '#ccc' }}>
    <h2>Scroll content starts here</h2>
  </div>
    <ProjectsComponent/>
    <AboutComponent/>
    <ContactComponent/>
    
  </StrictMode>,
)
