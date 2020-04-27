import React from 'react'

import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import { Container } from './Layout.styled'

const Layout = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
)

export default Layout
