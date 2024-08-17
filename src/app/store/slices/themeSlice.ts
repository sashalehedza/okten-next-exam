import { createSlice } from '@reduxjs/toolkit'

type ThemeState = {
  theme: string
}

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'light'
  }
  return 'light'
}

const initialState: ThemeState = {
  theme: getInitialTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', payload)
      }
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
