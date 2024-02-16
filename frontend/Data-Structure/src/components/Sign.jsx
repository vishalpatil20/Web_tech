import React, { useState } from 'react';
import axios from 'axios'; // Add this line


const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3001/user/register', formData);
    
          console.log('Request Data:', formData);
          console.log('Server Response:', response.data);
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Registration failed with status: ${response.status}`);
      }

      // Parse the server response as JSON
      const responseData = await response.json();

      // Handle the server response as needed
      console.log('Server Response:', responseData);

      // You can also redirect the user to another page or perform additional actions
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Registration failed:', error.message);
    }
  };
  return (
    <div className="relative w-full h-screen bg-zinc-800 ">
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
