"use client"
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { Menu, Github, Linkedin } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import avatar from '../assets/images/Picsart_23-10-29_15-40-58-045.png'
import Image from 'next/image'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)

  const sections = useMemo(
    () => [
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  )

  // Add shadow on scroll and set up active section detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [sections])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }
  return (
    <header className={`sticky top-0 z-40 border-b border-white/10 backdrop-blur-md ${scrolled ? 'bg-white/70 shadow-sm ring-1 ring-black/5 dark:bg-black/40' : 'bg-white/60 dark:bg-black/30'
      }`}>
      <div className="container-responsive flex h-16 items-center justify-between">
        <Link href="#" className="font-bold">
          <span className="gradient-text text-xl">RM</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => smoothScroll(e, s.id)}
              className={`transition-colors hover:text-brand-400 ${active === s.id ? 'text-brand-400' : ''
                }`}
              aria-current={active === s.id ? 'page' : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/rohitmore2001" target="_blank" className="p-2 hover:text-brand-400" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/rohitmore13" target="_blank" className="p-2 hover:text-brand-400" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <ThemeToggle />
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu"><Menu /></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/70 px-4 pb-4 pt-2 backdrop-blur-md dark:bg-black/40">
          <ul className="space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={(e) => smoothScroll(e, s.id)} className={active === s.id ? 'text-brand-400' : ''}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
