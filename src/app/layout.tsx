// app/layout.tsx (or wherever your RootLayout is located)
'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Provider } from 'react-redux'
import { store } from './store/store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
        </Provider>
        {children}
      </body>
    </html>
  )
}
