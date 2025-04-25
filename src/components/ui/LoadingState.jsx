import React from 'react';



const LoadingState = ({ message = 'Loading...' }) => {
  return (
    <div className="loading-state">
      <div className="loading-spinner"></div>
      <p>{message}</p>
    </div>
  );
};



export default LoadingState; 