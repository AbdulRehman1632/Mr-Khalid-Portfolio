import React from 'react'
// import darkTheme from './theme/darktheme' // your MUI dark theme
// import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import FullscreenSlider from '../../FullscreenSlider/FullscreenSlider'
import slides from '../../../utils/constant/slides/slides'

const Home = () => {
  return (
    <div>
        {/* <ThemeProvider theme={darkTheme}> */}
      <CssBaseline />
      <FullscreenSlider slides={slides} />
    {/* </ThemeProvider> */}
      
    </div>
  )
}

export default Home

