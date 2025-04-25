// Base API URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// API Routes configuration
export const API_ROUTES = {
  USERS: `${BASE_URL}/users`,
  ALBUMS: `${BASE_URL}/albums`,
  PHOTOS: `${BASE_URL}/photos`,
};

export default API_ROUTES; 

// THIS API IS FOR ALL USERS : https://jsonplaceholder.typicode.com/users
// THIS API IS FOR ALBUM INSIDE USER: https://jsonplaceholder.typicode.com/albums?userId=4
// THIS API IS FOR PHOTOS INSIDE USER https://jsonplaceholder.typicode.com/photos?albumId=4