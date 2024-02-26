'use client'
import Header from '../_components/Header'
import Hero from '../_components/Hero'
import About from '../_components/About'
import Skills from '../_components/Skills'
import Projects from '../_components/Projects'
import ScrollToTop from '../_components/ScrollToTop'
import dynamic from 'next/dynamic'
const Experience = dynamic(() => import('../_components/Experience'), {
  ssr: false
})

export default function Home() {
  const wrapper =
    'bg-lightBackground text-lightBlack dark:bg-darkBackground dark:text-lightWhite h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80'
  return (
    <div className={wrapper}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <ScrollToTop />
    </div>
  )
}
