import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Image component with fallback support
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
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

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  className: PropTypes.string
};

export default ImageWithFallback; 