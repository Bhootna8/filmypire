import { Inter } from 'next/font/google'
import './globals.css'
import { Store } from './Store/Store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Filmpire',
  description: 'Filmpire is a movie web for movie seekers',
}

export default function RootLayout({ children }) {
  return (
    <Store>
     <html lang="en">
      <body className={inter.className}>{children}</body>
     </html>
    </Store>
  )
}
