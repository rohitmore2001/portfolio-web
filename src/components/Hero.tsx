"use client"
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import data from '@/lib/data'
import Image from 'next/image'
import avatar from '../assets/images/Picsart_23-10-29_15-40-58-045.png'

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-radial" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 text-center lg:grid-cols-[320px,1fr] lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto w-44 sm:w-56 lg:mx-0 lg:w-72"
        >
          <div className="rounded-full bg-gradient-to-tr from-brand-500/50 via-accent-500/40 to-brand-400/40 p-1">
            <div className="overflow-hidden rounded-full bg-white/70 shadow-xl ring-1 ring-black/5 dark:bg-black/50">
              <Image src={avatar} alt={data.name} priority placeholder="empty" className="h-auto w-full object-cover" />
            </div>
          </div>
        </motion.div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="display"
          >
            <span className="gradient-text">{data.name}</span>
          </motion.h1>
          {data.designation && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-2 text-lg font-semibold tracking-wide text-brand-400"
            >
              {data.designation}
            </motion.p>
          )}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            className="section-sub mx-auto lg:mx-0"
          >
            Results-driven React/Next.js Developer crafting high-performance, scalable and delightful web apps.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a href={`mailto:${data.contact.email}`} className="card group inline-flex items-center gap-2 px-4 py-2">
              <span className="shine" />
              <Mail size={18} />
              <span>Contact</span>
            </a>
            <a href={`tel:${data.contact.phone.replace(/\s|-/g, '')}`} className="card inline-flex items-center gap-2 px-4 py-2">
              <span className="shine" />
              <Phone size={18} />
              <span>{data.contact.phone}</span>
            </a>
            {/* <a href={data.links.resume} target="_blank" className="card px-4 py-2">
              <span className="shine" />View Resume
            </a> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
