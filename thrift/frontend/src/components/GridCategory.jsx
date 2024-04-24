import * as React from 'react';
import CategoryCard from './Category.jsx'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const categories = ['Browse All', 'Apparel', 'Home Furniture', 'Textbooks & Books', 'Free Stuff', 'Music Instruments', 'Entertainment', 'Vehicles', 'Toys & Games', 'Plants & Outdoor Furniture', 'Sporting Goods', 'Property Rentals', 'Pet Supplies', 'Hobbies']

export default function CategoryGrid() {
  return (
    <Box className='category-box' sx={{ flexGrow: 1, padding: '0px', m:'0px' }}>
    <Grid className='category-grid' sx={{padding: '0px', m:'0px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {categories.map((category, index) => (
        <Grid classname='category-cards' sx={{padding: '0px', m:'0px'}} item xs={2} sm={4} md={3} key={index}>
          <CategoryCard key = {index} style={{height:'500px'}} categoryName={category}/>
        </Grid>
      ))}
    </Grid>
  </Box>
  );
}