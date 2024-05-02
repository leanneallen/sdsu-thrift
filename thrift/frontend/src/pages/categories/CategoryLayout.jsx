import * as React from 'react'
import ClippedDrawer from '../../components/FiltersCategory'
import CategoryGrid from '../../components/GridCategory';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListingsInCategory from '../../components/GridIndivCategory';
import Header from '../../components/Header';
import MultipleSelectPlaceholder from '../../components/FiltersCategory';
import axios from 'axios';

function CategoryPage() {
  var listingArr = []
  const { categoryName } = useParams();

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/listings/${categoryName}`)
  //   .then((response) => {
      
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching data: ', error);
  //   });
  // }, [categoryName]);

  return (
    <div>
        <Header />
        <div className='category-title' style={{
          display: 'flex',       // Make this a flex container
          alignItems: 'center',  // Align items vertically in the center
          justifyContent: 'space-between', // Space between the title and the select box
          marginTop: '64px',     // Top margin
          marginRight: '20px',   // Right margin for spacing
          marginLeft: '20px'     // Left margin for spacing
        }}>
          <h1>{categoryName}</h1>
          <MultipleSelectPlaceholder />
        </div>
        <ListingsInCategory />
    </div>
  );
}
export default CategoryPage;
