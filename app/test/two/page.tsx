'use client'

import Link from 'next/link'
import { Loading } from '@/components/loading'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Common = dynamic(() => import('@/components/canvas/Common').then((mod) => mod.Common), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loading />,
})
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })

export default function Page() {
  return (
    <>
      <View orbit className='relative size-full'>
        <Suspense fallback={null}>
          <Duck scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
          <Common color={'lightpink'} />
        </Suspense>
      </View>

      <div className='absolute left-1/2 top-1/2 z-10 size-32 -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-2'>
        <p>Two</p>

        <Link href='/test/one'>Go to One</Link>
      </div>
    </>
  )
}
