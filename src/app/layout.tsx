import AuthContext from './auth_context'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const year = new Date().getFullYear();

const metadata = {
  title: 'Ihub - Your one stop for all needs',
  description: 'Your Ultimate Shopping Destination. Discover, Shop, and Experience a World of Quality Products and Unbeatable Deals, All in One Place.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthContext>
      <html lang="en">
        <body className={openSans.className}>{children}</body>
      </html>
    </AuthContext>
  )
}
