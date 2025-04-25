import API_ROUTES from '../config/apiRoutes';

/**
 * Fetches data from the API with error handling
 * @param {string} url - The URL to fetch data from
 * @param {Object} options - Fetch options
 * @returns {Promise} - The response data or error
 */
const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

/**
 * API Service with methods for each endpoint
 */
const apiService = {
  /**
   * Get all users
   * @returns {Promise} - Users data
   */
  getUsers: () => {
    return fetchData(API_ROUTES.USERS);
  },
  
  /**
   * Get albums by user ID
   * @param {number} userId - The user ID
   * @returns {Promise} - Albums data
   */
  getAlbumsByUserId: (userId) => {
    return fetchData(`${API_ROUTES.ALBUMS}?userId=${userId}`);
  },
  
  /**
   * Get photos by album ID
   * @param {number} albumId - The album ID
   * @returns {Promise} - Photos data
   */
  getPhotosByAlbumId: (albumId) => {
    return fetchData(`${API_ROUTES.PHOTOS}?albumId=${albumId}`);
  }
};

export default apiService; 