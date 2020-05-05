import React from 'react'

import Layout from 'components/Layout'
import { Home, About, Invisible, Blog, Projects } from 'pages'

const App = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Invisible filter="sepia(0.75) saturate(5)" />
      <Projects />
      <Invisible filter="hue-rotate(25deg) saturate(1.5) brightness(1.25)" />
      <Blog />
    </Layout>
  )
}

export default App
