import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServiceCard/ServicesCard';
import './Services.css'

const AllService = () => {
    const [services, setServices] = useState([])
    const [spinner, setSpinner] = useState(false)


    useEffect(() => {
        fetch('https://secret-crag-61586.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setSpinner(data)
            })
    }, [])
    return (
        <main className="container">
            <div>
                <h1 style={{ color: '#FF4B54' }} className="my-3">Our all services</h1>

                {
                    spinner ? 
                            <div className="displayGrid">
                                {
                                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                                }
                            </div> 

                        :
                        <div className="d-flex justify-content-center align-items-center m-5">
                            <div>
                                <div className="spinner-border" role="status">
                                    <span>Loading...</span>
                                </div>
                            </div>

                        </div>
                }
            </div>




        </main>
    );
};

export default AllService;