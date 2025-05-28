'use client'

import { Loading } from '@/components/loading'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { Home } from '@/components/home'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Tech } from '@/components/tech'
import { Articles } from '@/components/articles'

const Common = dynamic(() => import('@/components/canvas/Common').then((mod) => mod.Common), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loading />,
})
const Tetrahedron = dynamic(() => import('@/components/canvas/tetrahedron').then((mod) => mod.Tetrahedron), {
  ssr: false,
})

type Pages = 'home' | 'about' | 'projects' | 'tech' | 'articles'

export default function Page() {
  const [currentPage, setCurrentPage] = useState<Pages>('home')

  const pages = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    tech: <Tech />,
    articles: <Articles />,
  }

  return (
    <>
      <View
        orbit
        className='relative size-full'
        position={[0, 0, 0]}
        target={[1.5, 0, 0]}
        fov={75}
        near={0.1}
        far={1000}
      >
        <Suspense fallback={null}>
          <Common color={'lightpink'} />

          <Tetrahedron
            position={[Math.cos(0) * 1.5, -0.5, Math.sin(0) * 1.5]}
            rotation={[
              Math.atan(Math.sqrt(2)) + Math.PI, // flip upside down
              Math.PI / 4,
              0,
            ]}
            onClick={() => setCurrentPage('about')}
          />

          {/* Cube */}
          <mesh position={[Math.cos(Math.PI * 0.4) * 1.5, 0, Math.sin(Math.PI * 0.4) * 1.5]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='#00ff00' roughness={0.2} metalness={0.8} envMapIntensity={1} />
          </mesh>

          {/* Octahedron */}
          <mesh position={[Math.cos(Math.PI * 0.8) * 1.5, 0, Math.sin(Math.PI * 0.8) * 1.5]}>
            <octahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial color='#0000ff' roughness={0.2} metalness={0.8} envMapIntensity={1} />
          </mesh>

          {/* Dodecahedron */}
          <mesh position={[Math.cos(Math.PI * 1.2) * 1.5, 0, Math.sin(Math.PI * 1.2) * 1.5]}>
            <dodecahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial color='#ffff00' roughness={0.2} metalness={0.8} envMapIntensity={1} />
          </mesh>

          {/* Icosahedron */}
          <mesh position={[Math.cos(Math.PI * 1.6) * 1.5, 0, Math.sin(Math.PI * 1.6) * 1.5]}>
            <icosahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial color='#ff00ff' roughness={0.2} metalness={0.8} envMapIntensity={1} />
          </mesh>
        </Suspense>
      </View>

      <div className='absolute left-1/2 top-1/2 z-10 size-32 -translate-x-1/2 translate-y-16 bg-blue-500/25 p-2'>
        <div>Current Page: {pages[currentPage]}</div>

        <hr />

        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('projects')}>Projects</button>
        <button onClick={() => setCurrentPage('tech')}>Tech</button>
        <button onClick={() => setCurrentPage('articles')}>Articles</button>
      </div>
    </>
  )
}
