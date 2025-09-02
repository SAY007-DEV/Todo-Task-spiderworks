# Task Fullstack Project

A simple fullstack authentication app with a React frontend and Node.js/Express/MongoDB backend.

## Project Structure

```
Task/
  back-end/           # Node.js/Express/MongoDB backend
    Controller/       # Controllers (business logic)
    Database/         # Mongoose models and DB connection
    Routes/           # Express route definitions
    Server.js         # Main server entry point
    package.json      # Backend dependencies
  front-end/          # React frontend (Vite)
    src/              # React source code
      Components/
        pages/        # Page components (Login, etc.)
      App.jsx         # Main app component
      main.jsx        # Entry point
    public/           # Static assets
    package.json      # Frontend dependencies
```

## Features
- User registration and login
- Passwords securely hashed with bcrypt
- MongoDB for user data storage
- REST API for authentication
- React login page with error/success handling

## Backend Setup

1. **Install dependencies:**
   ```bash
   cd back-end
   npm install
   ```
2. **Configure MongoDB:**
   - Make sure MongoDB is running locally or update the connection string in `Database/Connection.js`.
3. **Start the server:**
   ```bash
   node Server.js
   ```
   - The backend runs by default on `http://localhost:8080` (update if needed).

## Frontend Setup

1. **Install dependencies:**
   ```bash
   cd front-end
   npm install
   ```
2. **Start the React app:**
   ```bash
   npm run dev
   ```
   - The frontend runs by default on `http://localhost:5173` (Vite default).

## API Endpoints

### Registration
- **POST** `/Auth/api/register`
- **Body:** `{ "email": string, "password": string, "username": string }`
- **Response:** Success or error message

### Login
- **POST** `/Auth/api/login`
- **Body:** `{ "email": string, "password": string }`
- **Response:** Success or error message

## Notes
- Make sure backend and frontend are running on different ports.
- Update API URLs in frontend if backend port changes.
- Passwords are hashed before storage for security.
- You can extend the project with JWT authentication, user sessions, or more features as needed.

## Folder Naming
- The backend route folder is currently named `AuthRoues` (typo). Consider renaming to `AuthRoutes` for clarity.

## License
MIT 