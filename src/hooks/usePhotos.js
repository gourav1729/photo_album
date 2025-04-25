import useDataFetching from './useDataFetching';
import apiService from '../services/apiService';

/**
 * Custom hook to fetch photos by album ID
 * @param {number} albumId - The album ID
 * @returns {Object} - Photos data, loading state, and error
 */
const usePhotos = (albumId) => {
  const { data: photos, loading, error, refetch } = useDataFetching(
    () => apiService.getPhotosByAlbumId(albumId),
    [albumId]
  );

  return { photos, loading, error, refetch };
};

export default usePhotos; 