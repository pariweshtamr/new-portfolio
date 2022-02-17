import React from 'react'
import Accomplishments from '../components/Accomplishments/Accomplishments'
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import { Section } from '../components/Global'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/Timeline/Timeline'
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
        <Timeline />
        <Accomplishments />
      </Layout>
    </>
  )
}

export default Main
