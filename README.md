# Entertainment Hub 🎬

A Netflix-like entertainment streaming application built with React, Node.js, and MongoDB.

## Features

- 🎥 Browse movies and TV shows
- 🔍 Advanced search functionality
- ⭐ Rate and review content
- 🎯 Create watchlists and favorites
- 👤 User authentication and profiles
- 📱 Responsive design
- 🎨 Dark mode UI
- ⚡ Fast and optimized performance

## Tech Stack

### Frontend
- React 18
- Redux Toolkit
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js & Express
- MongoDB
- JWT Authentication
- Mongoose ODM

### Tools
- Docker
- GitHub Actions (CI/CD)

## Project Structure

```
entertainment-hub/
├── frontend/              # React application
│   ├── public/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # Redux store
│   │   ├── api/          # API calls
│   │   └── App.jsx
│   └── package.json
├── backend/              # Node.js API server
│   ├── routes/           # API routes
│   ├── models/           # MongoDB schemas
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── config/           # Configuration files
│   └── server.js
├── docker-compose.yml
└── .env.example
```

## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Setup Frontend

```bash
cd frontend
npm install
npm start
```

### Setup Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Docker Setup

```bash
docker-compose up
```

## Environment Variables

Create a `.env` file in the backend directory:

```
MONGODB_URI=mongodb://localhost:27017/entertainment-hub
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Content
- `GET /api/movies` - Get all movies
- `GET /api/shows` - Get all TV shows
- `GET /api/search?q=query` - Search content
- `GET /api/content/:id` - Get content details

### User
- `GET /api/user/profile` - Get user profile
- `POST /api/user/watchlist` - Add to watchlist
- `GET /api/user/watchlist` - Get watchlist
- `POST /api/user/ratings` - Rate content

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Author

Created by Najialirahmant-byte

## Support

For issues and questions, please open an issue on GitHub.
