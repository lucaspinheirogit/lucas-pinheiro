import React, { Suspense, lazy } from 'react'

import Layout from 'components/Layout'
import I18n from 'components/I18n'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Articles = lazy(() => import('./pages/Articles'))
const Invisible = lazy(() => import('./pages/Invisible'))

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Layout>
      <Home />
      <About />
      <Invisible />
      <Projects />
      <Invisible />
      <Articles />
      <I18n />
    </Layout>
  </Suspense>
)

export default App
