import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme')
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : false

  const [isDarkMode, setIsDarkMode] = useState(initialTheme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
