import React, { useState, forwardRef } from 'react';
import { Box } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

const listingArr = [
  "./src/assets/frog1.jpg",
  "./src/assets/frog2.png",
  "./src/assets/frog3.jpg",
  "./src/assets/frog4.jpg",
  "./src/assets/frog5.jpg",
  "./src/assets/frog6.jpg"
];

const ResponsiveCarousel = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === listingArr.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? listingArr.length - 1 : currentIndex - 1);
  };

  return (
    <Box ref={ref} sx={{
      position: 'relative', // Parent box is relative
      width: '100%', // full width of the container
      height: { xs: '50vh', sm: '60vh', md: '70vh' }, // responsive height based on breakpoints
      
    }}>

      {/* Blurry background container */}
      <Box className="blurry-background-container" sx={{
        backgroundImage: `url(${listingArr[currentIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'blur(5px)',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
      </Box>

      {/* Image buttons container */}
      <Box className='image-buttons-container' sx={{ position: 'absolute',alignItems: 'center', justifyContent: 'center', display: 'flex', top: 0, left: 0, width: '100%', height: '100%' }}>
        
        <ArrowCircleLeftRoundedIcon onClick={goToPrevSlide} sx={{ position: 'absolute', left: 16, zIndex: 2, cursor: 'pointer' }} />
        <Box component='img' src={listingArr[currentIndex]} alt={`Image ${currentIndex + 1}`} sx={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          zIndex: 1
        }} />
        
        <ArrowCircleRightRoundedIcon onClick={goToNextSlide} sx={{ position: 'absolute', right: 16, zIndex: 2, cursor: 'pointer' }} />
      
      </Box>

    </Box>
  );
});

export default ResponsiveCarousel;

