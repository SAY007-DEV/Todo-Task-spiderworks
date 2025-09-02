import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editStatus, setEditStatus] = useState('pending');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };


  const handleAdd = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
        description,
        status: 'pending',
      },
    ]);
    setTitle('');
    setDescription('');
  };


  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditStatus(todo.status);
  };

  
  const handleSave = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: editTitle, description: editDescription, status: editStatus }
          : todo
      )
    );
    setEditId(null);
    setEditTitle('');
    setEditDescription('');
    setEditStatus('pending');
  };

 
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const handleToggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === 'pending' ? 'completed' : 'pending' }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center max-w-md w-full">
        <div className="flex justify-between items-center mb-4 w-full">
          {username && <span className="text-lg font-semibold text-blue-700">Welcome, {username}!</span>}
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            Logout
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Todo List</h2>
        <form onSubmit={handleAdd} className="space-y-4 mb-6 w-full">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Todo title"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Todo description"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Add Todo
          </button>
        </form>
        <ul className="space-y-3 w-full">
          {todos.map((todo) => (
            <li key={todo.id} className="bg-gray-50 px-4 py-3 rounded flex flex-col gap-2">
              {editId === todo.id ? (
                <>
                  <label className="block mb-1 text-gray-700 font-medium">Title</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                  />
                  <label className="block mb-1 text-gray-700 font-medium">Description</label>
                  <textarea
                    value={editDescription}
                    onChange={e => setEditDescription(e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                  />
                  <label className="block mb-1 text-gray-700 font-medium">Status</label>
                  <select
                    value={editStatus}
                    onChange={e => setEditStatus(e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSave(todo.id)}
                      className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">{todo.title}</span>
                    <span className={todo.status === 'completed' ? 'text-green-600 font-semibold' : 'text-yellow-600 font-semibold'}>
                      Status: {todo.status.charAt(0).toUpperCase() + todo.status.slice(1)}
                    </span>
                  </div>
                  <div className="text-gray-600 mb-2">{todo.description}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(todo)}
                      className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleToggleStatus(todo.id)}
                      className={todo.status === 'pending' ? 'px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600' : 'px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600'}
                    >
                      {todo.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo