import useDataFetching from './useDataFetching';
import apiService from '../services/apiService';


const useUsers = () => {
  const { data: users, loading, error, refetch } = useDataFetching(
    apiService.getUsers
  );

  return { users, loading, error, refetch };
};

export default useUsers; 