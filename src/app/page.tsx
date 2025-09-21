import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Achievements from '@/components/Achievements'
import PersonalProjects from '@/components/PersonalProjects'
import Publications from '@/components/Publications'
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <PersonalProjects />
      <Achievements />
      <Contact />
    </main>
  )
}
