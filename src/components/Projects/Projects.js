import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../Global'
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from './ProjectsStyles'
import { projects } from '../../constants/constants'

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((project) => (
          <BlogCard key={project.id}>
            <Img src={project.image} />
            <TitleContent>
              <HeaderThree>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={project.visit}>Code</ExternalLinks>
              <ExternalLinks href={project.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  )
}

export default Projects
