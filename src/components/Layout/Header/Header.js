import React from 'react'

import { Translator } from 'components/I18n'

import { Container, Item } from './Header.styled'

const Header = () => (
  <Container>
    <Item href="#ABOUT">
      <Translator path="header.about" />
    </Item>
    <Item href="#PROJECTS">
      <Translator path="header.projects" />
    </Item>
    <Item href="#ARTICLES">
      <Translator path="header.articles" />
    </Item>
  </Container>
)

export default Header
