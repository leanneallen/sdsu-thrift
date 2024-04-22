import React from 'react';
import Header from '../components/Header.jsx';
import ResponsiveCarousel from '../components/ResponsiveCarousel.jsx';
import IndivListing from "../components/IndivListing.jsx";
import { AppBar, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function IndivListingPage() {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  
  const listingData = {
    title: 'Frog',
    category: 'Pet Supplies',
    owner: 'John Doe',
    description: 'Very cute frog. You want to buy this frog. Frog very good price...',
    price: '$100',
    createdAt: '2022-04-20 ',
    updatedAt: '2022-04-21'
  };

  return (
    <>
        <Header />
        <Box sx={{ marginTop: isSmUp ? '64px' : '56px' }}> 
        <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={6}>
          <Paper sx={{  height: '100%', display: 'flex', flexDirection: 'column', justifyContent: { xs: 'flex-start', md: 'center' } }}>
            <ResponsiveCarousel />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{}}>
          <Paper elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: { xs: 'flex-start', md: 'center' } }}>
            <IndivListing
              title={listingData.title}
              category={listingData.category}
              owner={listingData.owner}
              description={listingData.description}
              price={listingData.price}
              createdAt={listingData.createdAt}
              updatedAt={listingData.updatedAt}
            />
          </Paper>
        </Grid>
      </Grid>  
      </Box>
    </>
  );
}

export default IndivListingPage;


      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)' }}>
        <ResponsiveCarousel ref={carouselRef} />
        <IndivListing
          title={listingData.title}
          category={listingData.category}
          owner={listingData.owner}
          description={listingData.description}
          price={listingData.price}
          createdAt={listingData.createdAt}
          updatedAt={listingData.updatedAt}
          cardSize={cardSize}
        />
      </div> */}
      



