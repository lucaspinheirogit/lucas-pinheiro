import React from 'react'

import { Wallpaper, WallpaperMobile } from 'assets/images'
import { useWindowDimensions } from 'hooks'

import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import { Container } from './Layout.styled'

const Layout = ({ children }) => {
  const { width } = useWindowDimensions()

  const backgroundImage = width > 768 ? Wallpaper : WallpaperMobile
  return (
    <Container backgroundImage={backgroundImage}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}
export default Layout
