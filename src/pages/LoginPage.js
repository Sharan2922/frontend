// src/pages/LoginPage.js
import React from 'react';
import LoginStudent from '../components/LoginStudent';
import LoginInstitute from '../components/LoginInstitute';

const LoginPage = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="form-group">
        <h2>Login as Student</h2>
        <LoginStudent />
      </div>
      <div className="form-group">
        <h2>Login as Institute</h2>
        <LoginInstitute />
      </div>
    </div>
  );
};

export default LoginPage;
