// src/components/StarRating.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Using FontAwesome for star icons

const StarRating = ({isEditable = true, totalStars = 5 , defaultRating = 0 }) => {
    const [rating, setRating] = useState(defaultRating);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            style={{ display: 'none' }}
                        />
                        <FaStar
                            size={25}
                            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => isEditable && setHover(ratingValue)}
                            onMouseLeave={() => isEditable && setHover(0)}
                            style={{
                                cursor: isEditable ? 'pointer' : 'default',
                                transition: 'color 200ms',
                                marginRight: '5px',
                            }}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
