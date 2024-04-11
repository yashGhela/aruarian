import './globals.css'
import { Inter, Montserrat } from 'next/font/google'


const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Aruarian | AI powered task management',
  description: 'Generated by Yash💘',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      <body  className={inter.className}>{children}</body>
    </html>
  )
}
