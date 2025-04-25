import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Error State component
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const ErrorState = ({ message = 'An error occurred', onRetry }) => {
  return (
    <div className="error-state">
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="retry-button">
          Try Again
        </button>
      )}
    </div>
  );
};

ErrorState.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func
};

export default ErrorState; 