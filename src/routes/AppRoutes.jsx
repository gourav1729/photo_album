import { Routes, Route } from 'react-router-dom';
import UsersPage from '../pages/UsersPage';
import AlbumsPage from '../pages/AlbumsPage';
import PhotosPage from '../pages/PhotosPage';

/**
 * Application routes configuration
 * @returns {JSX.Element} - Rendered routes
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/:userName/:userId/albums" element={<AlbumsPage />} />
      <Route path="/:userName/:userId/:albumTitle/photos" element={<PhotosPage />} />
    </Routes>
  );
};

export default AppRoutes; 