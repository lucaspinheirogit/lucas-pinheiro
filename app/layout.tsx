import { Layout } from '@/components/dom/Layout'
import '@/global.css'

export const metadata = {
  title: 'Lucas Pinheiro',
  description:
    'Transforming complex ideas into scalable, intuitive web experiences with a product-driven mindset. I design and build responsive frontends, robust backends, and AI-powered systems that solve real problems and deliver impact.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
