import * as React from 'react';
import Listing from './UserListingCard'
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from "react-router-dom";

const listingArr = [
    {
      "title": "Weird Chair",
      "price": "$32424",
      "img": "./src/assets/BikeChair.png"
    },
    {
      "title": "Wood Cabinet",
      "price": "$5",
      "img": "./src/assets/Cabinet.png"    
    },
    {
      "title": "Chicken Lamp",
      "price": "$20",
      "img": "./src/assets/ChickenLamp.png"    
    },
    {
      "title": "Spooky Chair",
      "price": "Free",
      "img": "./src/assets/SpookyChair.png"    
    },
    {
      "title": "Tall Chairs",
      "price": "$50",
      "img": "./src/assets/TallChairs.png"    
    },   
    {
      "title": "Grass Chair",
      "price": "200",
      "img": "./src/assets/GrassChair.png"    
    },    
  ]

export default function ListingsInCategory(){  
return(
    <>

    <Grid container spacing = {{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 12, lg:15 }}>
      {listingArr.map((listing, index) => 
      (<>
        <Grid item xs={4} sm={3} md={3} lg={3} key={index}>
        <RouterLink to="/IndivListingPage" style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}>
            <Listing key={index} style ={{marginBottom: '64px', width: "200px", height: "345px"}} img = {listing.img} desc = {listing.price} title = {listing.title} />        
            </RouterLink>
        </Grid>
       </>
      ))}
    </Grid> 
    </>
)
}