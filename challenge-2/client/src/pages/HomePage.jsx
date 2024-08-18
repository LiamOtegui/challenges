import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation();
  const { username, recommendedProductsResponse } = location.state || {};
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterGlutenFree, setFilterGlutenFree] = useState(null);

  const getAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFilterChange = (filter) => {
    setFilterGlutenFree(filter);
    if (filter === null) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.glutenFree === filter));
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      {recommendedProductsResponse ? (
        <div>
          <h1 className="text-2xl font-bold text-green-600">Welcome, {username}!</h1>
          <div className="mt-4 text-lg text-green-500">Your Recommended Products:</div>
          <div className="mt-2 mb-6">
            {recommendedProductsResponse.map((product, index) => (
              <div key={index} className="p-4 mb-2 bg-white shadow rounded-lg">
                {product.product_name} - {product.reasons.join(', ')} ({product.gluten})
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-green-600">All Products:</h2>
            <div className="mt-2">
              <button
                onClick={() => handleFilterChange(null)}
                className="bg-green-400 text-white px-4 py-2 rounded mr-2"
              >
                Show All
              </button>
              <button
                onClick={() => handleFilterChange(true)}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Gluten Free
              </button>
              <button
                onClick={() => handleFilterChange(false)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Contains Gluten
              </button>
            </div>
            <div className="mt-4">
              {filteredProducts.map((product, index) => (
                <div key={index} className="p-4 mb-2 bg-white shadow rounded-lg">
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-sm text-gray-600">
                    Protein: {product.macronutrients.protein}g, Carbs: {product.macronutrients.carbohydrates}g, Fat: {product.macronutrients.fat}g
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500">Access Denied</p>
      )}
    </div>
  );
}

export default HomePage;