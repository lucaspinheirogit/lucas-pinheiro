import React from 'react'

import { Wallpaper2, Wallpaper2Mobile, Wallpaper3, Wallpaper3Mobile } from 'assets/images'
import { useWindowDimensions } from 'hooks'

import Layout from 'components/Layout'
import { Home, About, Invisible, Blog, Projects } from 'pages'

const App = () => {
  const { width } = useWindowDimensions()

  const backgroundImage1 = width > 768 ? Wallpaper2 : Wallpaper2Mobile
  const backgroundImage2 = width > 768 ? Wallpaper3 : Wallpaper3Mobile

  return (
    <Layout>
      <Home />
      <About />
      <Invisible imgSrc={backgroundImage1} />
      <Projects />
      <Invisible imgSrc={backgroundImage2} />
      <Blog />
    </Layout>
  )
}

export default App
