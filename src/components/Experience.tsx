"use client"
import { motion } from 'framer-motion'
import data from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mb-8 text-center">
        <h2 className="section-title">Experience</h2>
        <p className="section-sub mx-auto">Professional roles and key impact.</p>
      </div>
      <div className="space-y-6">
        {data.experience.map((exp, i) => (
          <motion.div
            key={exp.company + exp.period}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            viewport={{ once: true }}
          >
            <div className="shine" />
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h3 className="text-lg font-semibold">{exp.role} · <span className="text-brand-400">{exp.company}</span></h3>
                <p className="text-md opacity-80">{exp.period}</p>
              </div>
              <p className="text-md opacity-80">{exp.location}</p>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-md opacity-90">
              {exp.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
