import React, { useState } from 'react';
import axios from 'axios'; // Add this line


const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to manage success message
    const [errorMessage, setErrorMessage] = useState(''); // State to manage error message

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

            console.log('Server Response:', response.data);

            // Check if the request was successful
            if (response.status !== 200) {
                throw new Error(`Registration failed with status: ${response.status}`);
            }

            // Parse the server response as JSON (if needed, though not necessary in this case)
            const responseData = response.data;

            // Handle the server response as needed
            console.log('Server Response:', responseData);

            // Set registration success state to true
            setRegistrationSuccess(true);
        } catch (error) {
            // Handle error (e.g., show an error message)
            console.error('Registration failed:', error.message);

            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage('An error occurred during registration.');
            }
        }
    }

    return (
        <div className="relative w-full h-screen bg-gray-800 ">
            <div className="flex justify-center items-center h-full">
                <form onSubmit={handleSubmit} className="bg-zinc-400 p-14 rounded-md shadow-md">
                    <h2 className="text-6xl font-bold mb-4">Register</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-800 text-sm font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-black"
                            required
                        />
                    </div>
                    <button type="submit" className="items-center bg-black text-white rounded-md py-2 px-4 hover:bg-white hover:text-black focus:outline-none focus:ring focus:focus:border-black">
                        Register
                    </button>
                </form>
                {registrationSuccess && (
                    <div className="absolute bottom-4 bg-green-500 text-white p-2 rounded-md">
                        Registration Successful!
                    </div>
                )}
                {errorMessage && (
                    <div className="absolute bottom-4 bg-red-500 text-white p-2 rounded-md">
                        Email Exist!! Use another Email
                    </div>
                )}
            </div>
        </div>
    );
};
export default RegisterPage;
