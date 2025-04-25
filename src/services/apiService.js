import API_ROUTES from '../config/apiRoutes';

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


const apiService = {

  getUsers: () => {
    return fetchData(API_ROUTES.USERS);
  },
  

  getAlbumsByUserId: (userId) => {
    return fetchData(`${API_ROUTES.ALBUMS}?userId=${userId}`);
  },
  
  getPhotosByAlbumId: (albumId) => {
    return fetchData(`${API_ROUTES.PHOTOS}?albumId=${albumId}`);
  }
};

export default apiService; 