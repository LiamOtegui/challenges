import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const HomePage = () => {
    const { recommendationId } = useParams();
    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        const getRecommendation = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/recommendations/${recommendationId}`);
                setRecommendation(response.data.recommendations);
            } catch (error) {
                toast.error(error.message);
            }
        };

        getRecommendation();
    }, [recommendationId]);

    console.log(recommendation);
    

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
                        <img src=''/>
                    </div>
                ))
            }
        </div>
    );
};

export default HomePage;