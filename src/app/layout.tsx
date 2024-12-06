// src/app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/sections/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevOps Engineer Portfolio',
  description: 'Portfolio showcasing DevOps engineering expertise, projects, and technical insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}