// ImageSlider.jsx
import  { useState } from 'react';
import "./ImageSlider.css"

// Array of image URLs (You can replace these with your own images)
const images = [
  "https://cdn.pixabay.com/photo/2021/01/01/21/09/challenger-5880009_640.jpg",
  "https://cdn.pixabay.com/photo/2018/07/01/20/01/dashboard-3510327_640.jpg",
  "https://cdn.pixabay.com/photo/2021/12/08/15/53/traffic-6856075_640.jpg",
  "https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128_640.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
      <div className="slider-controls">
        <button onClick={prevImage} className="prev-button">Prev</button>
        <button onClick={nextImage} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
