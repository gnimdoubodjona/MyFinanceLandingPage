import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/sections/Hero/Hero'
import Layout from './Layout'
import Features from './components/sections/Features/Features'

function App() {
  return (
    <>
      <Layout>
        <Hero/>
        <Features/>
      </Layout>
    </>
  )
}


export default App
