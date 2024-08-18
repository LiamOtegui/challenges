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
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="button"
          onClick={(event) => getRecommendations(event)}
        >Login</button>
      </form>
    </div>
  );
};

export default UserAuth;