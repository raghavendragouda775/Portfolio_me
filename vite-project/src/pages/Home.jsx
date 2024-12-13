import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import { Testimonials } from '../components/Testimonials'
import { Section } from '../components/Section'

const Home=()=>{
  return (
    <main className='overflow-hidden'>
        <Hero/>
        <Services/>
        <About/>
        <Portfolio/>
        <Testimonials/>
        <Section/>


    </main>
  )
}

export default Home