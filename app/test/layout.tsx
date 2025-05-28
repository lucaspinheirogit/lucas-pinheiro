'use client'

import { Loading } from '@/components/loading'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      {/* <View orbit className='relative size-full'>
        <Suspense fallback={null}>
          <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
          <Common color={'lightpink'} />
        </Suspense>
      </View> */}

      {children}
    </div>
  )
}
