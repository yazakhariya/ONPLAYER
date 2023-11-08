import React from 'react'

interface Theme {
  theme: string
  setTheme: (value: string) => void
}

const ThemeContext = React.createContext<Theme>({
  theme: 'dark',
  setTheme: () => {},
})

export default ThemeContext
