import React from 'react'
import { Section, SectionText, SectionTitle } from '../Global'
import Button from '../Global/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm
          <br />
          Pariwesh
        </SectionTitle>
        <SectionText>
          Knack of building applications with front end operations
        </SectionText>
        <Button onClick={() => (window.location = 'https://google.com')}>
          Reach out
        </Button>
      </LeftSection>
    </Section>
  )
}

export default Hero
