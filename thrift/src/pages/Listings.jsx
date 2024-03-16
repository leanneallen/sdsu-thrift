import * as React from 'react'
import ListingLayout from '../components/ListingLayout'
import Header from '../components/Header'
import '../App.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material'

function ListingPage() {

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  
  return (
    <>
    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
        <Header/>
        <ListingLayout sx={{margin:"10"}}/>
        
      </ThemeProvider>
    </>
  )
}

export default ListingPage;
