"use client"
import { motion } from 'framer-motion'
import data from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="section pb-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="section-title">{data.contactSection?.title ?? 'Let’s build something great'}</h2>
        <p className="section-sub">{data.contactSection?.subtitle ?? 'I’m open to React/Next.js roles, freelance projects, and collaborations.'}</p>
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href={`mailto:${data.contact.email}`} className="card px-5 py-2">
            <span className="shine" />Email: {data.contact.email}
          </a>
          <a href={`https://wa.me/${data.contact.phone.replace(/\s|-/g,'')}`} target="_blank" className="card px-5 py-2">
            <span className="shine" />WhatsApp Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
