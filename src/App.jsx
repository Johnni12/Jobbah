import React from 'react'
import AppRouter from './routes/AppRouter'
import { ThemeProvider } from './context/ThemeContex'
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <AppRouter />
      </div>
    </ThemeProvider>
  )
}

export default App
