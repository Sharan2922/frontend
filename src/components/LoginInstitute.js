// src/components/LoginInstitute.js
import React, { useState } from 'react';
import contract from '../contract';

const LoginInstitute = () => {
  const [address, setAddress] = useState('');
  const [instituteId, setInstituteId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const institute = await contract.methods.loginInstitute(address).call();
    setInstituteId(institute[0]);
    setName(institute[1]);
    setEmail(institute[2]);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Institute Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {instituteId && (
        <div>
          <p>ID: {instituteId}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default LoginInstitute;
