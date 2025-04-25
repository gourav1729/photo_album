import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Loading State component
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
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