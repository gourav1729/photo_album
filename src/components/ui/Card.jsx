import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`card ${className}`} 
      onClick={onClick}
      role={onClick ? "button" : "region"}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Card; 