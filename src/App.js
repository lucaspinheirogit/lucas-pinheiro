import React from 'react'

import Layout from 'components/Layout'
import { Home, About, Invisible, Blog, Projects } from 'pages'

const App = () => (
  <Layout>
    <Home />
    <About />
    <Invisible />
    <Projects />
    <Invisible />
    <Blog />
  </Layout>
)

export default App
