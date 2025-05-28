import { useState } from 'react'
import { useCursor } from '@react-three/drei'

interface TetrahedronProps {
  position: [number, number, number]
  rotation: [number, number, number]
  onClick: () => void
}

export function Tetrahedron({ position, rotation, onClick }: TetrahedronProps) {
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  return (
    <mesh
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <tetrahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color='#ff0000'
        opacity={hovered ? 0.5 : 1}
        roughness={0.2}
        metalness={0.8}
        envMapIntensity={1}
        transparent={true}
      />
    </mesh>
  )
}
