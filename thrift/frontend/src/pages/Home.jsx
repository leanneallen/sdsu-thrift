import * as React from 'react'
import CategoryGrid from '../components/GridCategory'
import Header from '../components/Header'
import AdvancedCarousel from '../components/Carousel'
import { Grid } from '@mui/material'
import { Box, Typography } from '@mui/material'

function HomePage() {

  return (
    <>

    <Grid container spacing={0} columns={12} >
      
      <Grid item xs={12}>
        <Header/>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <br />
          <br />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Typography variant="h5" textAlign={'left'} sx={{mt: '8px', mb:'16px'}}>
            Recent Listings
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <AdvancedCarousel/>  
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Typography variant="h5" textAlign={'left'} sx={{mb:'16px'}}>
            Categories
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <CategoryGrid /> 
      </Grid>
      
    </Grid>
    </>
  )
}

export default HomePage

{/* <Header/>
<AdvancedCarousel/> 
<CategoryGrid /> */}