import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Formats a breadcrumb segment for display
 * @param {string} segment - URL segment
 * @returns {string} - Formatted segment
 */
const formatBreadcrumbSegment = (segment) => {
  return decodeURIComponent(segment).replace(/-/g, ' ');
};

/**
 * BreadcrumbItem component for individual breadcrumb links
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const BreadcrumbItem = ({ url, label, isLast }) => (
  <span className="breadcrumb-item">
    {!isLast ? (
      <>
        <Link to={url}>{label}</Link>
        <span className="separator"> / </span>
      </>
    ) : (
      <span className="current">{label}</span>
    )}
  </span>
);

BreadcrumbItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isLast: PropTypes.bool
};

/**
 * Navbar component with breadcrumb navigation
 * @returns {JSX.Element} - Rendered component
 */
const Navbar = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // Process segments for breadcrumb display
  const breadcrumbs = pathSegments.reduce((acc, segment, index) => {
    // Skip user IDs and album IDs (numeric segments)
    if ((index === 1 || index === 3) && !isNaN(segment)) {
      return acc;
    }
    
    const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = formatBreadcrumbSegment(segment);
    
    acc.push({ url, label });
    return acc;
  }, []);

  return (
    <nav className="navbar">
      <h1>Photo Gallery</h1>
      <div className="breadcrumbs">
        <BreadcrumbItem url="/" label="Home" isLast={pathSegments.length === 0} />
        
        {breadcrumbs.map((crumb, index) => (
          <BreadcrumbItem 
            key={index}
            url={crumb.url}
            label={crumb.label}
            isLast={index === breadcrumbs.length - 1}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 