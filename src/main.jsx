import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import darkTheme from './theme/darktheme.js'
import { CssBaseline, ThemeProvider } from '@mui/material'

createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* sets background and base styles from theme */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
