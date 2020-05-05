import React from 'react'

import { Container, Item } from './Header.styled'

const Header = () => (
  <Container>
    <Item href="#ABOUT">Sobre</Item>
    <Item href="#PROJECTS">Projetos</Item>
    <Item href="#BLOG">Blog</Item>
  </Container>
)

export default Header
