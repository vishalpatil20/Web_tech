import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegisterTab, setRegisterTab] = useState(true);

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
            const endpoint = isRegisterTab ? 'register' : 'login';
            const response = await axios.post(`http://localhost:3001/user/${endpoint}`, formData);
    
            console.log('Server Response:', response.data);
    
            if (response.status !== 200) {
                throw new Error(`${isRegisterTab ? 'Registration' : 'Login'} failed with status: ${response.status}`);
            }
    
            const responseData = response.data;
    
            console.log('Server Response:', responseData);
    
            if (isRegisterTab) {
                setRegistrationSuccess(true);
            } else {
                navigate('/', { state: { userName: responseData.user.username } });
                console.log('Login Successful!');
            }
        } catch (error) {
            console.error(`${isRegisterTab ? 'Registration' : 'Login'} failed:`, error.message);
    
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage(`An error occurred during ${isRegisterTab ? 'registration' : 'login'}.`);
            }
        }
    };

    const toggleTab = () => {
        setRegisterTab((prev) => !prev);
        setRegistrationSuccess(false);
        setErrorMessage('');
    };

    return (
        <div className="relative w-full h-screen bg-gray-800 ">
            <div className="flex justify-center items-center h-full">
                <form onSubmit={handleSubmit} className="bg-zinc-400 p-14 rounded-md shadow-md">
                    <h2 className="text-6xl font-bold mb-4">{isRegisterTab ? 'Register' : 'Login'}</h2>
                    {isRegisterTab && (
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
                    )}
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
                        {isRegisterTab ? 'Register' : 'Login'}
                    </button>
                </form>
                {registrationSuccess && (
                    <div className="absolute bottom-10 bg-green-500 text-white p-2 rounded-md">
                        {isRegisterTab ? 'Registration Successful!' : 'Login Successful!'}
                    </div>
                )}
                {errorMessage && (
                    <div className="absolute bottom-10 bg-red-500 text-white p-2 rounded-md">
                        {isRegisterTab ? 'Email Exist!! Use another Email' : 'Login failed'}
                    </div>
                )}
                <div className="absolute bottom-4 text-white">
                    <button onClick={toggleTab} className="underline">
                        {isRegisterTab ? 'Already have an account? Login here.' : 'Don\'t have an account? Register here.'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
