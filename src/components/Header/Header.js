import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  PortfolioLink,
  SocialIcons,
} from './HeaderStyles'

const Header = () => {
  return (
    <Container>
      <Div1>
        <PortfolioLink to="/">
          <DiCssdeck /> <span>Portfolio</span>
        </PortfolioLink>
      </Div1>

      <Div2>
        <li>
          <NavLink to="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="#tech">Technologies</NavLink>
        </li>
        <li>
          <NavLink to="#about">About</NavLink>
        </li>
      </Div2>

      <Div3>
        <SocialIcons to="https://github.com">
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons to="https://linkedin.com">
          <AiFillLinkedin />
        </SocialIcons>
        <SocialIcons to="https://instagram.com">
          <AiFillInstagram />
        </SocialIcons>
      </Div3>
    </Container>
  )
}

export default Header
