import { useState, useEffect } from 'react';

/**
 * Custom hook for data fetching with loading and error states
 * @param {Function} fetchFunction - The API function to call
 * @param {Array} dependencies - Dependencies array for useEffect
 * @returns {Object} - Data, loading state, error state, and refetch function
 */
const useDataFetching = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetchFunction();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  // Provide a refetch function to manually trigger data fetching
  const refetch = () => fetchData();

  return { data, loading, error, refetch };
};

export default useDataFetching; 