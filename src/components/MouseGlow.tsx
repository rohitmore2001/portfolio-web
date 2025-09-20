"use client"
import { useEffect } from 'react'

export default function MouseGlow() {
  useEffect(() => {
    const glow = document.getElementById('glow')
    if (!glow) return
    const onMove = (e: PointerEvent) => {
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
  return <div className="cursor-glow" id="glow" aria-hidden="true" />
}
