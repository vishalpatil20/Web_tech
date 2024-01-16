import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/user/register', {
        username,
        email,
        password,
      });

      setRegistrationMessage(response.data.message); // Assuming your server returns a 'message' property
    } catch (error) {
      console.error(error);
      setRegistrationMessage('Registration failed. Please try again.'); // Display an error message
    }
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
    {registrationMessage && (
        <div className="mt-4 text-green-500">
          {registrationMessage}
        </div>
      )}
  </div>

  );
};

export default Register;