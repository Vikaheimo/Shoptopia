import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'
import NavBar from './NavBar/NavBar'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shoptopia',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <>
        {/* <Header/> */}
        <NavBar/>
        {children}
        </>
        
      </body>
    </html>
  )
}