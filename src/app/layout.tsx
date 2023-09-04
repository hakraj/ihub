import AuthContext from './auth_context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
        <body className={inter.className}>{children}</body>
      </html>
    </AuthContext>
  )
}
