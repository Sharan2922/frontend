// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Student Registry</h1>
      <div className="form-group">
        <Link to="/login"><button>Login</button></Link>
      </div>
      <div className="form-group">
        <Link to="/register"><button>Register</button></Link>
      </div>
    </div>
  );
};

export default HomePage;
