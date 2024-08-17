// src/components/ThemeProvider.tsx
import { useEffect } from 'react'
import { useAppSelector } from '../app/store/store'

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useAppSelector((state) => state.theme)

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [theme])

  return <>{children}</>
}

export default ThemeProvider
