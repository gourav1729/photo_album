import useDataFetching from './useDataFetching';
import apiService from '../services/apiService';

/**
 * Custom hook to fetch albums by user ID
 * @param {number} userId - The user ID
 * @returns {Object} - Albums data, loading state, and error
 */
const useAlbums = (userId) => {
  const { data: albums, loading, error, refetch } = useDataFetching(
    () => apiService.getAlbumsByUserId(userId),
    [userId]
  );

  return { albums, loading, error, refetch };
};

export default useAlbums; 