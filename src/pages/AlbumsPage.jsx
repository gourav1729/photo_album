import { Link, useParams } from 'react-router-dom';
import useAlbums from '../hooks/useAlbums';
import Card from '../components/ui/Card';
import LoadingState from '../components/ui/LoadingState';
import ErrorState from '../components/ui/ErrorState';

/**
 * Album Card component
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const AlbumCard = ({ album, userName, userId }) => {
  // Format the album title for use in URL
  const formattedTitle = album.title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link 
      to={`/${userName}/${userId}/${formattedTitle}/photos`} 
      className="album-card-link"
      state={{ albumId: album.id }}
    >
      <Card className="album-card">
        <h3>{album.title}</h3>
      </Card>
    </Link>
  );
};

/**
 * AlbumsPage component - displays albums for a user
 * @returns {JSX.Element} - Rendered component
 */
const AlbumsPage = () => {
  const { userId, userName } = useParams();
  const { albums, loading, error, refetch } = useAlbums(userId);

  if (loading) return <LoadingState message="Loading albums..." />;
  if (error) return <ErrorState message={`Error: ${error}`} onRetry={refetch} />;
  if (albums.length === 0) return <div className="empty-state">No albums found for this user.</div>;

  return (
    <div className="page albums-page">
      <h2>Albums for {decodeURIComponent(userName)}</h2>
      <div className="albums-grid">
        {albums.map(album => (
          <AlbumCard 
            key={album.id} 
            album={album} 
            userName={userName} 
            userId={userId} 
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumsPage; 