import GoogleAnalytics from './Components/GoogleAnalytics'
import './globals.css'
import { Inter, Montserrat, Fredoka, VT323, Old_Standard_TT } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aruarian | AI powered task management',
  description: 'Aruarian is an AI powered task management tool designed to help you live a more effective life ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <GoogleAnalytics />
      
      
      <body  className={inter.className}>{children}</body>
    </html>
  )
}
