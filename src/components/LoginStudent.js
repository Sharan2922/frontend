// src/components/LoginStudent.js
import React, { useState } from 'react';
import contract from '../contract';

const LoginStudent = () => {
  const [address, setAddress] = useState('');
  const [studentId, setStudentId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const student = await contract.methods.loginStudent(address).call();
    setStudentId(student[0]);
    setName(student[1]);
    setEmail(student[2]);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Student Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {studentId && (
        <div>
          <p>ID: {studentId}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default LoginStudent;
