import useDataFetching from './useDataFetching';
import apiService from '../services/apiService';

/**
 * Custom hook to fetch users
 * @returns {Object} - Users data, loading state, and error
 */
const useUsers = () => {
  const { data: users, loading, error, refetch } = useDataFetching(
    apiService.getUsers
  );

  return { users, loading, error, refetch };
};

export default useUsers; 