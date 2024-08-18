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
  }

  const handleFilterChange = (filter) => {
    setFilterGlutenFree(filter);
    if (filter === null) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.glutenFree === filter));
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <div className="p-6 min-h-screen flex flex-col md:flex-row">
      {recommendedProductsResponse ? (
        <>
          <div className="flex flex-col w-full md:w-3/5">
            <div className='flex mb-4'>
              <h1 className="text-4xl font-bold text-orange-500 inline-block bg-white rounded-full px-5 pt-5 pb-6 shadow-md">
                Welcome {username}!
              </h1>
              <div className="text-2xl text-white font-bold mt-6 mb-3 pl-8 underline">
                Your Recommended Products:
              </div>
            </div>
            <div className="flex flex-col mt-4 mb-6 space-y-5">
              {recommendedProductsResponse.map((product, index) => (
                <div key={index} className="flex p-8 mb-2 bg-white rounded-lg text-xl space-x-10 font-mono shadow-md">
                  <div className='font-bold'>
                    {product.product_name}
                  </div>
                  <div>
                    {product.reasons.join(', ')}
                  </div>
                  <div className='text-orange-500'>
                    ({product.gluten})
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/5 ml-16">
            <h2 className="text-xl font-semibold text-white">You can see all the products here!</h2>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => handleFilterChange(null)}
                className={`px-4 py-2 rounded mr-2 ${filterGlutenFree === null ? 'bg-orange-700 text-white' : 'bg-orange-600 text-white'}`}
              >
                Show All
              </button>
              <button
                onClick={() => handleFilterChange(true)}
                className={`px-4 py-2 rounded mr-2 ${filterGlutenFree === true ? 'bg-orange-700 text-white' : 'bg-orange-600 text-white'}`}
              >
                Gluten Free
              </button>
              <button
                onClick={() => handleFilterChange(false)}
                className={`px-4 py-2 rounded ${filterGlutenFree === false ? 'bg-orange-700 text-white' : 'bg-orange-600 text-white'}`}
              >
                Contains Gluten
              </button>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {filteredProducts.map((product, index) => (
                <div key={index} className="p-4 bg-white shadow rounded-lg">
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-sm text-gray-600">
                    Protein: {product.macronutrients.protein}g, Carbs: {product.macronutrients.carbohydrates}g, Fat: {product.macronutrients.fat}g
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className='text-white text-[3rem]'>
            Access Denied
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage