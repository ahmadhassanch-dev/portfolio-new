import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Learning from '@/components/sections/Learning'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="main-container">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <Contact />
    </div>
  )
}
