import React from 'react'
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import { Section } from '../components/Global'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
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
      </Layout>
    </>
  )
}

export default Main
