// src/pages/RegisterPage.js
import React from 'react';
import RegisterStudent from '../components/RegisterStudent';
import RegisterInstitute from '../components/RegisterInstitute';

const RegisterPage = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <div className="form-group">
        <h2>Register as Student</h2>
        <RegisterStudent />
      </div>
      <div className="form-group">
        <h2>Register as Institute</h2>
        <RegisterInstitute />
      </div>
    </div>
  );
};

export default RegisterPage;
