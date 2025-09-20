"use client"
import { motion } from 'framer-motion'
import data from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mb-8 text-center">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub mx-auto">Selected work across dashboards, community apps, and exchanges.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((p, i) => (
          <motion.a
            // href={p.link}
            key={p.title}
            // target="_blank"
            className="card group block p-6 no-underline hover:no-underline focus:no-underline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            viewport={{ once: true }}
          >
            <div className="shine" />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-md opacity-80">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-80">
              {p.stack.map(s => (
                <span key={s} className="rounded-full bg-brand-500/10 px-2 py-0.5 text-brand-300 ring-1 ring-brand-500/20">{s}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
