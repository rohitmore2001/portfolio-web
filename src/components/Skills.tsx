"use client"
import { motion } from 'framer-motion'
import data from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mb-8 text-center">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub mx-auto">Frontend, State management, Backend & Tools.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.skills.map((s, i) => (
          <motion.div
            key={s.title}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            viewport={{ once: true }}
          >
            <div className="shine" />
            <h3 className="font-semibold text-brand-400">{s.title}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-md opacity-90">
              {s.items.map(it => <li key={it}>{it}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
