import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const { recommendationId } = useParams();
    const [recommendation, setRecommendation] = useState([]);
    
    const navigate = useNavigate()

    const getRecommendation = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/recommendations/${recommendationId}`);
            setRecommendation(response.data.recommendations);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getRecommendation();
    }, [recommendationId]);

    const logOut = async () => {
        try {
            await axios.post('http://localhost:5000/users/logout')
            navigate('/')
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div>
            {
                recommendation.map((plan, index) => (
                    <div key={index}>
                        <div>
                            Nutrient: {plan.nutrient}
                        </div>
                        <div>Recommended foods: {plan.recommended_foods}</div>
                        <div>Avoid foods: {plan.avoid_foods}</div>
                        <img src='' />
                    </div>
                ))
            }
            <button onClick={() => logOut()}>LogOut!</button>
        </div>
    );
};

export default HomePage;