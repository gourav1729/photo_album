import { useParams, useLocation } from 'react-router-dom';
import usePhotos from '../hooks/usePhotos';
import Card from '../components/ui/Card';
import LoadingState from '../components/ui/LoadingState';
import ErrorState from '../components/ui/ErrorState';
import ImageWithFallback from '../components/ui/ImageWithFallback';


const PhotoCard = ({ photo }) => {
  const handleViewFullSize = (e) => {
    e.preventDefault();
    window.open(photo.url, '_blank');
  };

  return (
    <Card className="photo-card">
      <div className="img-container">
        <ImageWithFallback 
          src={photo.thumbnailUrl} 
          alt={photo.title} 
          loading="lazy"
        />
      </div>
      <h3>{photo.title}</h3>
      <button 
        onClick={handleViewFullSize} 
        className="view-full-btn"
      >
        View Full Size
      </button>
    </Card>
  );
};


const PhotosPage = () => {
  const { albumTitle } = useParams();
  const location = useLocation();
  const albumId = location.state?.albumId;
  
  const { photos, loading, error, refetch } = usePhotos(albumId);

  if (!albumId) {
    return <ErrorState message="Album ID not found. Please go back to albums page." />;
  }

  if (loading) return <LoadingState message="Loading photos..." />;
  if (error) return <ErrorState message={`Error: ${error}`} onRetry={refetch} />;
  if (photos.length === 0) return <div className="empty-state">No photos found for this album.</div>;

  return (
    <div className="page photos-page">
      <h2>Photos from {decodeURIComponent(albumTitle).replace(/-/g, ' ')}</h2>
      <div className="photos-grid">
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotosPage; 