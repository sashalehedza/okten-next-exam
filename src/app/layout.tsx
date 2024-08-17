'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ThemeProvider from '@/components/ThemeProvider'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <html lang='en'>
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </Provider>
  )
}
