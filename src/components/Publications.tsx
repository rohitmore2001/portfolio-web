"use client"
import { motion } from 'framer-motion'
import data from '@/lib/data'
import { Shapes } from 'lucide-react'

export default function Puclications() {
    const items = (data as any).publications ?? []
    if (!items.length) return null
    return (
        <section id="personal-projects" className="section">
            <div className="mb-8 text-center">
                {/* <p className="kicker">Side Work</p> */}
                <h2 className="section-title">Publications</h2>
                <p className="section-sub mx-auto">Projects crafted through learning, experimentation, and passion.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
                {items.map((p: any, i: number) => (
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
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{p.title}</h3>
                            <a href={p.link} target="_blank" aria-label="Open project">
                              <Shapes className="h-5 w-5 opacity-70 transition-colors hover:text-brand-400 hover:opacity-100" />
                            </a>
                        </div>
                        <p className="mt-2 text-sm md:text-base opacity-80">{p.description}</p>
                       <span className='flex items-center mt-2'><h6 className="font-semibold mr-2">Registratuion ID : </h6> <p className=" text-sm md:text-base opacity-80"> {" " + p.regId}</p></span>
                       <span className='flex items-center mt-2'><h6 className="font-semibold mr-2">Paper ID : </h6> <p className=" text-sm md:text-base opacity-80">{p.regId}</p></span>
                       <span className='flex items-center mt-2'><h6 className="font-semibold mr-2">Impact factor : </h6> <p className=" text-sm md:text-base opacity-80">{p.impactFactor}</p></span>
                       <span className='flex items-center mt-2'><h6 className="font-semibold mr-2">Published In : </h6> <p className=" text-sm md:text-base opacity-80">{p.publishedIn}</p></span>
                       <span className='flex items-center mt-2'><h6 className="font-semibold mr-2">Page No : </h6> <p className=" text-sm md:text-base opacity-80">{p.pageNo}</p></span>
                       <span className='flex items-center mt-2'><h6 className="font-semibold mr-2">Published URL : </h6> <p className=" text-sm md:text-base opacity-80">{p.publishedUrl}</p></span>
                              <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-80">
                            {/* {p.stack?.map((s: string) => (
                                <span key={s} className="rounded-full bg-brand-500/10 px-2 py-0.5 text-brand-300 ring-1 ring-brand-500/20">{s}</span>
                            ))} */}

                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}
