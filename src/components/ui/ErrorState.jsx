import React from 'react';



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


export default ErrorState; 