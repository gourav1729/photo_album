import useDataFetching from './useDataFetching';
import apiService from '../services/apiService';


const usePhotos = (albumId) => {
  const { data: photos, loading, error, refetch } = useDataFetching(
    () => apiService.getPhotosByAlbumId(albumId),
    [albumId]
  );

  return { photos, loading, error, refetch };
};

export default usePhotos; 