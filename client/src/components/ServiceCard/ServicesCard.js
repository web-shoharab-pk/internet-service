import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './ServicesCard.css'


const ServicesCard = ({ service }) => {

    const { setBookingService } = useContext(UserContext)
    const history = useHistory()
    const handleBooking = (id) => {
        fetch(`https://secret-crag-61586.herokuapp.com/bookingService/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookingService(data[0])
                if (data) {
                    history.push('/admin/bookingService')
                }
            })
    }

    return (
        <div className=" p-3">
            <div className=" ">
            <div className="shadow  cardDiv p-1" style={{ width: '18rem' }} >
                <img  src={service.serviceImage} className="card-img-top  " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text"><strong>Details:</strong>  {service.description}</p>
                    <h5 className="card-title">Price: ${service.price} <span className="text-danger">per/month</span> </h5>
                    <button onClick={() => handleBooking(service._id)} className="brandBtn">Book Now</button>
                    
                </div>
            </div>
            </div>
      
        </div>

    );
};

export default ServicesCard;