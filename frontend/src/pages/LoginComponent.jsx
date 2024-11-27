import React, { useState } from "react";
import useLogin from "./useLogin";

const LoginComponent = ({ setIsAuthenticated }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    login,
  } = useLogin(setIsAuthenticated);

  const handleLogin = () => {
    login();
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
