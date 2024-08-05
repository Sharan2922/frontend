// src/components/RegisterInstitute.js
import React, { useState } from 'react';
import web3 from '../web3';
import contract from '../contract';

const RegisterInstitute = () => {
  const [instituteId, setInstituteId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async () => {
    const accounts = await web3.eth.getAccounts();
    await contract.methods
      .registerInstitute(instituteId, name, email, address)
      .send({ from: accounts[0] });
    alert('Institute registered successfully!');
  };

  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Institute ID"
        value={instituteId}
        onChange={(e) => setInstituteId(e.target.value)}
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
        placeholder="Institute Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterInstitute;
