import React from 'react'
import { DiReact, DiTrello, DiMongodb } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../Global'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'
const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle main>Technologies</SectionTitle>
      <SectionText>
        I have worked with a range of technologies in the web development world.
        From Back-end to Front-end & Design
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <span>
            <FaNodeJs size="3rem" />
            <DiMongodb size="3rem" />
          </span>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js and MongoDb
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <span>
            <DiTrello size="3rem" />
            <FiFigma size="3rem" />
          </span>
          <ListContainer>
            <ListTitle>UI</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Trello & Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  )
}

export default Technologies
