import React, { useState } from 'react';
import authService from '../auth/authService';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const success = await authService.login(username, password);

    if (success) {
      // Login successful, redirect to dashboard
      history.push('/dashboard');
    } else {
      // Login failed, handle error (show message, reset form, etc.)
      console.error('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;