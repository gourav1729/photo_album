import React, { useState } from 'react';



const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+Not+Found', 
  className = '',
  ...rest 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  const handleError = () => {
    console.error(`Image failed to load: ${src}`);
    setImgSrc(fallbackSrc);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`image ${className}`}
      onError={handleError}
      {...rest}
    />
  );
};


export default ImageWithFallback; 