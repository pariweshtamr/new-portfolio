import React from 'react'
import { AccompData } from '../../constants/constants'
import { Section, SectionTitle } from '../Global'
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles'

const Accomplishments = () => {
  return (
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {AccompData.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  )
}

export default Accomplishments
