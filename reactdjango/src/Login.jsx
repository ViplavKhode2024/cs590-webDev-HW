import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function getCsrfToken() {
  const cookieValue = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith('csrftoken='))
    .split('=')[1];
  return cookieValue;
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token'))
      navigate('/index');
  });


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get the latest CSRF token
      const csrfToken = getCsrfToken();

      // Make a POST request to the Django authentication endpoint
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

      const response = await axios.post(
        'http://localhost:8000/api/login/',
        {
          username: username,
          password: password
        },
        {
          headers: {
            'X-CSRFToken': csrfToken
          }
        }
      );

      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAdmin', response.data.admin);
      localStorage.setItem('permissionList', response.data.permissions);
   
        console.log(response.data);

      navigate('/index');
    } catch (error) {
      setError('Invalid username or password');
    }
  };
  return (
    <div className='container'>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="username" aria-describedby="userHelp" placeholder="Enter Username"/>
          <small id="userHelp" class="form-text text-muted">
            Username and Password fields are case sensitive!
          </small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" placeholder="Password"/>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  );
}

export default Login;
