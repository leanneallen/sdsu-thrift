import * as React from 'react';
import CategoryCard from './Category.jsx'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const categories = ['Browse All', 'Apparel', 'Home Furniture', 'Textbooks & Books', 'Free Stuff', 'Music Instruments', 'Entertainment', 'Vehicles', 'Toys & Games', 'Plants & Outdoor Furniture', 'Sporting Goods', 'Property Rentals', 'Pet Supplies', 'Hobbies']

export default function CategoryGrid() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {categories.map((category, index) => (
        <Grid item xs={2} sm={4} md={3} key={index}>
          <CategoryCard key = {index} style={{height:'500px'}} categoryName={category}/>
        </Grid>
      ))}
    </Grid>
  </Box>
  </Container>
  );
}