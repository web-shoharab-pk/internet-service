import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({review}) => {
    return (
        <div className="col-md-4 p-3">
            <div className="shadow reviewCard p-3">
                <div className="d-flex justify-content-around align-items-center">
                    <img style={{width: '100px', borderRadius: '50%'}} src={review.image} alt=""/>
                    <div>
                        <h3>{review.name}</h3>
                        <h6>{new Date().toDateString()}</h6>
                    </div>
                </div>
                <div className="mt-3">
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;