import * as React from 'react'
import ListingLayout from '../components/ListingLayout'
import Header from '../components/Header'
import '../App.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material'

function ListingPage() {

  
  return (
    <>
        <Header/>
        <ListingLayout sx={{padding:"10"}}/>
    </>
  )
}

export default ListingPage;
