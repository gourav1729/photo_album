import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsersPage from './pages/UsersPage';
import AlbumsPage from './pages/AlbumsPage';
import PhotosPage from './pages/PhotosPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/:userName/:userId/albums" element={<AlbumsPage />} />
            <Route path="/:userName/:userId/:albumTitle/photos" element={<PhotosPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

