import useDataFetching from './useDataFetching';
import apiService from '../services/apiService';


const useAlbums = (userId) => {
  const { data: albums, loading, error, refetch } = useDataFetching(
    () => apiService.getAlbumsByUserId(userId),
    [userId]
  );

  return { albums, loading, error, refetch };
};

export default useAlbums; 