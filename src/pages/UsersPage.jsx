import { Link } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import Card from '../components/ui/Card';
import LoadingState from '../components/ui/LoadingState';
import ErrorState from '../components/ui/ErrorState';

/**
 * User Card component
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
const UserCard = ({ user }) => (
  <Link 
    to={`/${user.name}/${user.id}/albums`} 
    className="user-card-link"
  >
    <Card className="user-card">
      <div className="user-avatar">{user.name.charAt(0)}</div>
      <h3>{user.name}</h3>
      <p className="user-email">{user.email}</p>
      <p className="user-company">{user.company.name}</p>
    </Card>
  </Link>
);

/**
 * UsersPage component - displays all users
 * @returns {JSX.Element} - Rendered component
 */
const UsersPage = () => {
  const { users, loading, error, refetch } = useUsers();

  if (loading) return <LoadingState message="Loading users..." />;
  if (error) return <ErrorState message={`Error: ${error}`} onRetry={refetch} />;

  return (
    <div className="page users-page">
      <h2>Users</h2>
      <div className="users-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage; 