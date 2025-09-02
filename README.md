# Todo Fullstack Project

A modern fullstack task management application with user authentication, built with React frontend and Node.js/Express/MongoDB backend.

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
        pages/        # Page components (Home, Login, Register, Todo)
        ProtectedRoute.jsx  # Route protection component
      App.jsx         # Main app component with routing
      main.jsx        # Entry point
    public/           # Static assets
    package.json      # Frontend dependencies
```

## Features

### Authentication & Security
- User registration and login with email, username, and password
- Passwords securely hashed with bcrypt
- JWT (JSON Web Token) authentication
- Protected routes - only authenticated users can access Todo page
- Automatic logout functionality

### Task Management
- Create, edit, and delete todo items
- Each todo has title, description, and status (pending/completed)
- Toggle todo status between pending and completed
- Real-time status updates
- User-specific todo management

### User Interface
- responsive design with Tailwind CSS
- Consistent gradient background across all pages
- Modern card-based layout
- Intuitive form controls with proper labels
- Loading states and error handling
- Welcome message with username display

### Technical Features
- MongoDB for persistent user data storage
- RESTful API endpoints
- Axios for HTTP requests
- React Router for navigation
- Local storage for user session management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or cloud instance)
- npm or yarn package manager

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/SAY007-DEV/Todo-Task-spiderworks
cd Task
```

### 2. Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd back-end
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install required packages (if not already installed):**
   ```bash
   npm install express mongoose cors bcryptjs jsonwebtoken
   ```

4. **Configure MongoDB:**
   - Make sure MongoDB is running locally
   - Update the connection string in `Database/Connection.js` if needed
   - Default connection: `mongodb://localhost:27017/`

5. **Set up environment variables (optional):**
   - Create a `.env` file in the backend directory
   - Add: `JWT_SECRET=your-secret-key-here`

### 3. Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd front-end
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install required packages (if not already installed):**
   ```bash
   npm install axios react-router-dom
   ```



## How to Run the Project

### 1. Start the Backend Server

```bash
cd back-end
node Server.js
```

The backend will start on `http://localhost:8080`

### 2. Start the Frontend Development Server

In a new terminal:

```bash
cd front-end
npm run dev
```

The frontend will start on `http://localhost:5173`

### 3. Access the Application

Open your browser and navigate to `http://localhost:5173`



## Application Flow

1. **Home Page** - Welcome screen with Register/Login options
2. **Registration** - Create new user account
3. **Login** - Authenticate existing user
4. **Todo Page** - Protected route for authenticated users
   - Add new todos with title and description
   - Edit existing todos
   - Delete todos
   - Toggle todo status
   - Logout functionality

## Security Features

- Passwords are hashed using bcrypt before storage
- JWT tokens for secure authentication
- Protected routes prevent unauthorized access
- Input validation on both frontend and backend
- Secure session management with localStorage

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- CORS

### Frontend
- React
- React Router
- Axios
- Tailwind CSS
- Vite




