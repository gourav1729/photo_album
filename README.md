# Photo Gallery Application

A React application that displays users, their albums, and photos from the JSONPlaceholder API.

## Project Structure

The project follows a clean, modular architecture with separation of concerns:

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # Generic UI components
│   └── Navbar.jsx    # Navigation component
├── config/           # Configuration files
│   └── apiRoutes.js  # API endpoint configuration
├── hooks/            # Custom React hooks
│   ├── useAlbums.js
│   ├── useDataFetching.js
│   ├── usePhotos.js
│   └── useUsers.js
├── pages/            # Page components
│   ├── AlbumsPage.jsx
│   ├── PhotosPage.jsx
│   └── UsersPage.jsx
├── routes/           # Routing configuration
│   └── AppRoutes.jsx
├── services/         # Service layer for API communication
│   └── apiService.js
└── utils/            # Utility functions
```

## Best Practices Applied

### 1. API Handling

API logic is centralized in `apiService.js` using:
- A single fetch implementation with error handling
- Specific methods for each endpoint
- Reusable code pattern for all API calls

### 2. API Routes Management

- API URLs are stored in `apiRoutes.js` rather than hardcoded
- Single source of truth for all API endpoints
- Easy to change base URL or endpoint paths

### 3. Clean Code Structure

- Components follow Single Responsibility Principle
- Meaningful naming conventions throughout
- JSDoc comments for documentation
- Consistent code style

### 4. Routing System

- Centralized routing configuration in `AppRoutes.jsx`
- React Router for client-side routing
- URL parameters used for navigation
- Breadcrumb navigation shows current path

### 5. Reusable Custom Hooks

- `useDataFetching` for common data fetching logic
- Specific hooks (`useUsers`, `useAlbums`, `usePhotos`) for business logic
- Components remain focused on UI rendering
- Consistent API with loading, error, and data states

### 6. Reusable Components

- UI components designed for flexibility and reuse
- No hardcoded content in components
- Props validation with PropTypes
- Component composition (like Card + ImageWithFallback)

### 7. DRY Principle

- Common functionality is extracted to reusable hooks and components
- Shared styling through CSS classes
- Consistent patterns for loading, error and empty states

## Features

- View all users from the API
- View albums for a specific user
- View photos in a specific album
- Navigation breadcrumb showing the current path
- Error handling and loading states
- Responsive design for different screen sizes

## API

The application uses the JSONPlaceholder API:
- Users: https://jsonplaceholder.typicode.com/users
- Albums: https://jsonplaceholder.typicode.com/albums?userId={id}
- Photos: https://jsonplaceholder.typicode.com/photos?albumId={id}

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser at the URL shown in the terminal (typically http://localhost:5173/)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
