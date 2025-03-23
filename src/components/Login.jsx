import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-box">
      <h2>
        Sign in to your <br /> PopX account
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="input-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button type="submit" disabled>
        Login
      </button>
    </div>
  );
};

export default Login;
