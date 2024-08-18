import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify'

const UserAuth = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const getRecommendations = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`http://localhost:5000/username/${username}`);
      const { recommendedProductsResponse } = response.data;

      navigate(`/${username}`, { state: { username, recommendedProductsResponse } });
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white pb-7 py-5 px-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-[2rem] font-bold text-orange-600 mb-3 text-center font-mono">Login</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
            onClick={(event) => getRecommendations(event)} 
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;