import React from 'react'
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import { Section } from '../components/Global'
import Hero from '../components/Hero/Hero'
import Layout from '../Layout/Layout'

const Main = () => {
  return (
    <>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
      </Layout>
    </>
  )
}

export default Main
