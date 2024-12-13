import { useState } from 'react'

import './App.css'



import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import { ReactLenis, useLenis } from 'lenis/react'


function App() {
  return(
    <>
<Header/>
<main>
  
  <Hero/>
  <About/>
  <Skill/>
  <Work/>
  <Contact/>
</main>
<Footer/>
 
    </>
  )
}

export default App
