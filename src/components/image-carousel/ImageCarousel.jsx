import React, { useState } from 'react';
import './ImageCarousel.css'; // Importing the CSS for styling

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };  

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="left-btn">&#9664;</button>
      <img src={images[currentIndex]} alt="Displayed" className="carousel-image" />
      <button onClick={goToNext} className="right-btn">&#9654;</button>
    </div>
  );
}

export default ImageCarousel;
