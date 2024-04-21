import React, { useState } from 'react';

const listingArr = [
  "./src/assets/frog1.jpg",
  "./src/assets/frog2.png",
  "./src/assets/frog3.jpg",
  "./src/assets/frog4.jpg",
  "./src/assets/frog5.jpg",
  "./src/assets/frog6.jpg"
];

const AdvancedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === listingArr.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? listingArr.length - 1 : currentIndex - 1);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <button onClick={goToPrevSlide}>Prev</button>
          <div style={{ width: '500px', height: '500px', position: 'relative', overflow: 'hidden' }}>
            <img src={listingArr[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <button onClick={goToNextSlide}>Next</button>
        </div>
        <div>
          {currentIndex + 1} / {listingArr.length}
        </div>
      </div>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

export default AdvancedCarousel;
