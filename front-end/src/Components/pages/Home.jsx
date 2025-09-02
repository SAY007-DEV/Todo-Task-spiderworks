import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 text-center drop-shadow">Welcome to Task Manager!</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">Organize your tasks, stay productive, and manage your day with ease.</p>
        <div className="flex gap-6 w-full justify-center">
          <button
            onClick={() => navigate('/register')}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 text-lg"
          >
            Register
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-50 transition-colors duration-200 text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home