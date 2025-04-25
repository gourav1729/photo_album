import React from 'react';
import PropTypes from 'prop-types';


const LoadingState = ({ message = 'Loading...' }) => {
  return (
    <div className="loading-state">
      <div className="loading-spinner"></div>
      <p>{message}</p>
    </div>
  );
};

LoadingState.propTypes = {
  message: PropTypes.string
};

export default LoadingState; 