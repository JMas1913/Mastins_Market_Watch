import React, { useState } from 'react';
import { Route } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [hyperliknk, setHyperlink] = useState('');

  const check = () => {
    if (username.length > 0 && password.length >= 7) {
      setIsValid(true);
      setHyperlink('http://localhost:3000/markets');
      submit();
    } else {
      setIsValid(false);
      setHyperlink('');
      submit();
    }
  };

  const submit = (e) => {
    if (setIsValid === true) {
      return 'Valid';
    } else if (setIsValid === false) {
      return 'Invalid';
    } else {
      return;
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="username">Username</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <button
          type="submit"
          placeholder=""
          id="submit"
          value={check ? true : false}
          onClick={check}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
