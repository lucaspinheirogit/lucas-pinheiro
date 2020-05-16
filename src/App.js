import React, { Suspense, lazy } from 'react'

import Layout from 'components/Layout'
import { Home } from 'pages'

const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Articles = lazy(() => import('./pages/Articles'))
const Invisible = lazy(() => import('./pages/Invisible'))

const App = () => (
  <Layout>
    <Home />
    <Suspense fallback={<div>Loading...</div>}>
      <About />
      <Invisible />
      <Projects />
      <Invisible />
      <Articles />
    </Suspense>
  </Layout>
)

export default App
