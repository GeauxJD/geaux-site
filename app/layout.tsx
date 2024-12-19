import './globals.css'
import { Inter } from 'next/font/google'
import Layout from './components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Geaux Online',
  description: 'Home of the world famous College Football Viewers Guide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

