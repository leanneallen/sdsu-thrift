import * as React from 'react';
import Listing from './ListingCard';
import Grid from '@mui/material/Grid';
import axios from 'axios';

let initListingArr = [
    {
      "title": "Weird Chair",
      "price": "$32424",
      "image": "./src/assets/BikeChair.png"
    },
    {
      "title": "Wood Cabinet",
      "price": "$5",
      "image": "./src/assets/Cabinet.png"    
    },
    {
      "title": "Chicken Lamp",
      "price": "$20",
      "image": "./src/assets/ChickenLamp.png"    
    },
    {
      "title": "Spooky Chair",
      "price": "Free",
      "image": "./src/assets/SpookyChair.png"    
    },
    {
      "title": "Tall Chairs",
      "price": "$50",
      "image": "./src/assets/TallChairs.png"    
    },   
    {
      "title": "Grass Chair",
      "price": "200",
      "image": "./src/assets/GrassChair.png"},
  ]

export default function ListingList(){  
  const [listings, setListings] = React.useState(initListingArr);
  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/listings/my/poop')
    .then((response) => {
      console.log(listings)
      setListings([...response.data])
      //console.log(listings)
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  }, []); 
  
return(
    <>
    <Grid container spacing = {{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 12, lg:15 }}>
      {listings.map((listing, index) => 
      (<>      
        <Grid item xs={4} sm={3} md={3} lg={3} key={index}>
            <Listing key={index} style ={{marginBottom: '64px', width: "200px", height: "345px"}} image = {listing.image} price = {listing.price} title = {listing.title} />        
        </Grid>
       </>
      ))}
    </Grid> 
    </>
)
}