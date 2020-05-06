import React from 'react'

import { Wallpaper2, Wallpaper3 } from 'assets/images'

import Layout from 'components/Layout'
import { Home, About, Invisible, Blog, Projects } from 'pages'

const App = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Invisible imgSrc={Wallpaper2} />
      <Projects />
      <Invisible imgSrc={Wallpaper3} />
      <Blog />
    </Layout>
  )
}

export default App
