import { useState } from 'react';
import { Route } from 'react-router-dom';

const Validator = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfrimPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [hyperliknk, setHyperlink] = useState('');

  const check = () => {
    if (
      username.length > 0 &&
      password.length >= 7 &&
      confirmPassword === password
    ) {
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
    <div className="form">
      <h1>Sign Up</h1>
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
        <label htmlFor="username"></label>

        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="password"></label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          value={confirmPassword}
          onChange={(e) => {
            setConfrimPassword(e.target.value);
          }}
        />
        <label htmlFor="passwordConfirm"></label>

        <button
          type="submit"
          placeholder=""
          id="submit"
          value={check ? true : false}
          onClick={check}
        >
          Sign Up
        </button>

        <p>Passwords must match.</p>
        <p>Password must be at least 7 characters in length.</p>
      </form>
    </div>
  );
};

export default Validator;
