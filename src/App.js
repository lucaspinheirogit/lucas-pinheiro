import React from 'react'

import Layout from 'components/Layout'
import { Home, About, Invisible, Articles, Projects } from 'pages'

const App = () => (
  <Layout>
    <Home />
    <About />
    <Invisible />
    <Projects />
    <Invisible />
    <Articles />
  </Layout>
)

export default App
