import React from 'react'
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import { Section } from '../components/Global'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Layout from '../Layout/Layout'

const Main = () => {
  return (
    <>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
      </Layout>
    </>
  )
}

export default Main
