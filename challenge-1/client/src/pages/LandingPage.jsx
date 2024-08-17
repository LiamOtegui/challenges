import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users/login', {
                username,
                password,
            });

            const recommendationId = response.data.recommendationId;

            if (recommendationId) {
                navigate(`/HomePage/${recommendationId}`);
            } else {
                toast.error('Invalid username or password');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    console.log(username);
    console.log(password);    

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-xl font-bold">Please Log In</h1>
                <form className="flex flex-col space-y-2" onSubmit={onSubmitForm}>
                    <input
                        className="border border-black p-2 w-64"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        className="border border-black p-2 w-64"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        type="submit"
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LandingPage