import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', { username, password });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>

      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
