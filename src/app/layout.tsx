import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import MouseGlow from '@/components/MouseGlow'
import { Inter } from 'next/font/google'
import favicon from '../assets/images/favicon.jpg'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Rohit More — React Developer',
  description: 'Portfolio of Rohit Maruti More, React/TypeScript developer specializing in high-performance web apps.',
  icons: { icon: '/favicon.jpg' },
  openGraph: {
    title: 'Rohit More — React Developer',
    description: 'High-performance, delightful web apps using React, Next.js, TypeScript',
    url: 'https://localhost:3000',
    images: [
      { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop' }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MouseGlow />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
