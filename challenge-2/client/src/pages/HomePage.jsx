import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation()
  const { username, recommendedProductsResponse } = location.state || {}
  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products')
      setProducts(response.data)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div>
      {
        recommendedProductsResponse ? (
          <div>
            <h1>Welcome, {username}!</h1>
            <h2>Your Recommended Products:</h2>
            {
              recommendedProductsResponse.map((product, index) => (
                <li key={index}>
                  {product.product_name} - {product.reasons.join(', ')} ({product.gluten})
                </li>
              ))
            }
          </div>)
          : 'Access Denied'
      }
    </div>
  );
};

export default HomePage;