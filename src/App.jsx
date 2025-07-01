// src/App.jsx
import React from 'react'
import CustomNav from './Components/CustomNav/CUstomNav'
import { Route,BrowserRouter as Router, Routes } from 'react-router'
import { routes } from './routes/routes'
// import { ThemeProvider, CssBaseline } from '@mui/material'


function App() {
  return (
   <Router>
    <CustomNav/>
    <Routes>
      {routes.map((items,index)=>{
        return(
          <Route key={index} path={items?.path} element={items?.element}/>
        )
      })}
    </Routes>
   </Router>
  )
}

export default App
