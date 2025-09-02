
import './App.css'
import Home from './Components/pages/Home'
import Login from './Components/pages/Login'
import Register from './Components/pages/Register'
import Todo from './Components/pages/Todo'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home/>} />
      </Routes>
    
  )
}

export default App
