'use client'

import Link from 'next/link'
import { Loading } from '@/components/loading'
import dynamic from 'next/dynamic'
import { Suspense, useRef, useMemo, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const Common = dynamic(() => import('@/components/canvas/Common').then((mod) => mod.Common), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loading />,
})
const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })

function RotatableTetrahedron(props: any) {
  const [dragging, setDragging] = useState(false)
  const [last, setLast] = useState([0, 0])
  const [rotation, setRotation] = useState([
    // -Math.PI / 3.14,
    -1,
    -Math.PI / 4,
    0,
  ])

  console.log(rotation)

  const geometry = useMemo(() => {
    const baseGeom = new THREE.TetrahedronGeometry(0.8, 0)
    const geom = baseGeom.toNonIndexed() as THREE.BufferGeometry // ensure each face has unique vertices
    const position = geom.getAttribute('position')
    const color = []
    const faceColors = [
      new THREE.Color(1, 0, 0), // red
      new THREE.Color(0, 1, 0), // green
      new THREE.Color(0, 0, 1), // blue
      new THREE.Color('yellow'), // yellow
    ]
    for (let i = 0; i < position.count; i += 3) {
      const faceColor = faceColors[(i / 3) % faceColors.length]
      for (let j = 0; j < 3; j++) {
        color.push(faceColor.r, faceColor.g, faceColor.b)
      }
    }
    geom.setAttribute('color', new THREE.Float32BufferAttribute(color, 3))
    return geom
  }, [])

  const handlePointerDown = (e) => {
    e.stopPropagation()
    setDragging(true)
    setLast([e.clientX, e.clientY])
  }

  const handlePointerUp = (e) => {
    e.stopPropagation()
    setDragging(false)
  }

  const handlePointerMove = (e) => {
    if (!dragging) return
    e.stopPropagation()
    const [lx, ly] = last
    const dx = e.clientX - lx
    const dy = e.clientY - ly
    setRotation(([rx, ry, rz]) => [rx + dy * 0.01, ry + dx * 0.01, rz])
    setLast([e.clientX, e.clientY])
  }

  return (
    <mesh
      geometry={geometry}
      {...props}
      rotation={rotation}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <meshStandardMaterial vertexColors roughness={0.2} metalness={0.8} envMapIntensity={1} />
    </mesh>
  )
}

export default function Page() {
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

          {/* <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} /> */}

          {/* Tetrahedron */}
          <RotatableTetrahedron position={[Math.cos(0) * 1.5, -0.5, Math.sin(0) * 1.5]} />

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

      {/* <div className='absolute left-1/2 top-1/2 z-10 size-32 -translate-x-1/2 translate-y-16 bg-blue-500/25 p-2'>
        <p>One</p>

        <Link href='/test/two'>Go to Two</Link>
      </div> */}
    </>
  )
}
