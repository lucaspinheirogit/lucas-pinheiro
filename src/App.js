import React, { Suspense, lazy } from 'react'

import Layout from 'components/Layout'
import I18n from 'components/I18n'
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
      <I18n />
    </Suspense>
  </Layout>
)

export default App
