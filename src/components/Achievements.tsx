"use client"
import { motion } from 'framer-motion'
import data from '@/lib/data'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="mb-8 text-center">
        <p className="kicker">Highlights</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-sub mx-auto">Recognitions, leadership, and competitive results.</p>
      </div>
      <div className="mx-auto max-w-3xl">
        <ul className="grid gap-3">
          {data.achievements.map((a: { title: string; meta?: string }, i: number) => (
            <motion.li
              key={a.title + i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i }}
              viewport={{ once: true }}
              className="card p-4"
            >
              <div className="shine" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500 ring-4 ring-brand-500/15" />
                <div>
                  <p className="font-medium leading-tight">{a.title}</p>
                  {a.meta && <p className="mt-0.5 text-xs opacity-70">{a.meta}</p>}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
