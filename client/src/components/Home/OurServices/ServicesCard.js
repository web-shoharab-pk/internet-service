import React from 'react';
import './style.css';

const ServicesCard = ({service}) => {
    return (
        <div className=" serviceCard shadow my-3 col-md-4" style={{width: '18rem'}}>
            <img src={service.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.description}</p>
            </div>
        </div>

    );
};

export default ServicesCard;