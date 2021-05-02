import React from 'react';
import broadband from '../../images/broadband.jpg';
import tvDish from '../../images/tv-internet.jpg';
import mobile from '../../images/mobile-internet.jpg'
import ServicesCard from './ServicesCard';

const services = [
    {
        id: 101,
        title: 'Broadband',
        image: broadband,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel minus, perspiciatis blanditiis corrupti quas!'
    },
    {
        id: 102,
        title: 'TV Dish',
        image: tvDish,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel minus, perspiciatis blanditiis corrupti quas!'
    },
    {
        id: 103,
        title: 'Moblie Data',
        image: mobile,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel minus, perspiciatis blanditiis corrupti quas!'
    }
]

const OurServices = () => {
    return (
        <section className="container mt-5">
            <div className="text-center">
                <div>
                    <h3 style={{color: '#D2159C'}}>OUR SERVICES CATEGORIES</h3> 
                </div> 
            </div>
            <div className="row d-flex justify-content-around align-items-center mt-5">
                {
                    services.map(service =>  <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
               
            </div>
        </section>
    );
};

export default OurServices;