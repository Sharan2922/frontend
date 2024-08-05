// src/components/RegisterStudent.js
import React, { useState } from 'react';
import web3 from '../web3';
import contract from '../contract';

const RegisterStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instituteId, setInstituteId] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async () => {
    const accounts = await web3.eth.getAccounts();
    await contract.methods
      .registerStudent(studentId, name, email, instituteId, address)
      .send({ from: accounts[0] });
    alert('Student registered successfully!');
  };

  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Institute ID"
        value={instituteId}
        onChange={(e) => setInstituteId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Student Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterStudent;
