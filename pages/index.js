import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

import Footer from '@/components/footer'
import Feed from '@/components/Feed'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='h-screen w-full    mx-auto'>
      <NavBar />
      <section className=' mt-27 mx-28 '>
        <Feed />
      </section>
      <Footer />

    </div>
  )
}
