import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import Typography from '@mui/material/Typography';
import Listing from './RecentListings';

const listingArr = [
  {
    "title": "IKEA Dresser",
    "price": "$50",
    "img": "./src/assets/Dresser_pic.jpg"
  },
  {
    "title": "Boho Wall Art",
    "price": "$60",
    "img": "./src/assets/wall_art.jpg"    
  },
  {
    "title": "Chemistry Textbook",
    "price": "$20",
    "img": "./src/assets/textbook.jpg"    
  },
  {
    "title": "Condo for Rent",
    "price": "$1,500",
    "img": "./src/assets/rental.jpg"    
  },
  {
    "title": "Honda Civic 2015",
    "price": "$10,000",
    "img": "./src/assets/honda_car.jpg"
  },
  {
    "title": "Guitar",
    "price": "$200",
    "img": "./src/assets/guitar.jpg"
  }
]

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev } = useSnapCarousel();

  return (
    <>
      <Typography variant="h5"
        style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginLeft: '20px', marginTop: '50px', marginBottom:'0px'}}>
        Recent Listings
      </Typography>
      <ul ref={scrollRef} style={{ display: 'flex', overflow: 'hidden', scrollSnapType: 'x mandatory'}}>
        {listingArr.map((item, i) => (
          <li key={i} style={{ margin: '10px', flex: '1 0 80%', height: '300px', maxWidth: '250px' }}>
            <Listing title={item.title} price={item.price} img={item.img} />
          </li>
        ))}
        </ul>
      <div>
        {activePageIndex + 1} / {pages.length}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      <div style={{marginTop: '50px'}}></div>
    </>
  );
};

export default AdvancedCarousel;