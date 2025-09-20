"use client"
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      className="rounded-full border border-white/10 p-2 hover:bg-white/20"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Theme toggle"
    >
      {isDark ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  )
}
