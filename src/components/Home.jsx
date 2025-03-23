import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <div className="header">
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <button className="create-account" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="login-link" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
