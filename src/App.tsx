import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/sections/Hero/Hero'
import Layout from './Layout'
import Features from './components/sections/Features/Features'
import HowItWorks from './components/sections/HowItWorks/HowItWorks'
import TargetAudience from './components/sections/TargetAudience/TargetAudience'
import Testimonials from './components/sections/Testimonials/Testimonials'

function App() {
  return (
    <>
      <Layout>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <Testimonials/>
      </Layout>
    </>
  )
}


export default App
