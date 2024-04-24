import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import Typography from '@mui/material/Typography';
import Listing from './RecentListings';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';


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
];

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev } = useSnapCarousel();
  
  // sx={{ px: 2, my: 2 }}
  // sx={{ ml: 2, mt: 4 }}
  return (
    <Box className='carousel-top' sx={{m: 0, padding: '0px'}}>  
      <Box className='carousel-buttons' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', m: 0, p: 0}}>
      
      <ArrowCircleLeftRoundedIcon onClick={prev} sx={{ fontSize: '35px', position: 'absolute', left: 16, zIndex: 2, cursor: 'pointer' }} />
        
        <Box className='carousel-boxes'
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflow: 'hidden',
            scrollSnapType: 'x mandatory'
          }}
          
        >
          {listingArr.map((item, index) => (
            <Box key={index}
                sx={{
                scrollSnapAlign: 'start',
                minWidth: '250px',
                maxWidth: '250px',
                height: '250px',
                my: 0,
                p: 0,
                mx: 1,
                flexShrink: 0,
                position: 'relative',
              }}

            >
              <Listing title={item.title} price={item.price} img={item.img} />
              

            </Box>
          ))}
        </Box>
          <ArrowCircleRightRoundedIcon onClick={next} sx={{ fontSize: '35px', position: 'absolute', right: 16, zIndex: 2, cursor: 'pointer' }}/>
        </Box>
        <Typography sx={{display: 'flex', flexDirection: "column", justifyContent: "center"}}>{activePageIndex + 1} / {pages.length}</Typography>
    </Box>
  );
};

export default AdvancedCarousel;
