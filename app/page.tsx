import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import Gallery from '@/components/Gallery'
import OurPromise from '@/components/OurPromise'

export const page = () => {
  return (
    <>
      <main>
        <Hero />
        <Feature />
        <Gallery />
        <OurPromise />
      </main>
    </>
  )
}

export default page