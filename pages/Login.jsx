import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement your login logic here
    console.log('Login details:', { email, password, rememberMe });
  };

  return (
   <div className='login-wrapper'>
    <div style={{ margin: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '200px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label><br />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '200px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="rememberMe">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            {' '}Remember Me
          </label>
        </div>
        
        <button type="submit">Sign In</button>
      </form>

      <hr />

      <p>Don’t have an account?</p>
      <Link to="/register">Sign up</Link>
    </div>
    </div> 
  );
}

export default Login;
