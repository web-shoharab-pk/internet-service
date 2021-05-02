import React, { useEffect, useState } from 'react';
import './Review.css';
import ReviewCard from './ReviewCard/ReviewCard';
 
const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://secret-crag-61586.herokuapp.com/reviews')
        
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="container my-5">
            <div>
                <h1 style={{color: '#BF18A2'}} className="text-center">Review</h1>
            </div>
            <div className="row">
                  {
                      reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                  }  
            </div>
        </section>
    );
};

export default Review;