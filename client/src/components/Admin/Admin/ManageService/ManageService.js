import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './ManageService.css';

const ManageService = () => {

    const [services, setServices] = useState([]);
    const [result, setResult] = useState([]);
    const [spinner, setSpinner] = useState(false)

    useEffect(() => {
        fetch('https://secret-crag-61586.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setSpinner(data)
            })
    }, [])

    const handleDeleteService = (id) => {
        fetch(`https://secret-crag-61586.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setResult(result)
            })
    }
    const displayHide = (e) => {
        if (result) {
            e.target.parentNode.style.display = 'none';
        }
    }

    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">


                    {
                        spinner ?

                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>

                                        <th scope="col">Service Name</th>
                                        <th scope="col">Service Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        services.map(service =>
                                            <tr key={service._id} className="text-secondary">
                                                <th>{service.name}</th>
                                                <th>${service.price}</th>
                                                <td onClick={displayHide}><button onClick={() => handleDeleteService(service._id)} className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            :
                            <div className="d-flex justify-content-center mt-5">
                                <div className="spinner-border" role="status">
                                    <span>Loading...</span>
                                </div>
                            </div>

                    }

                </div>
            </div>
        </main>
    );
};

export default ManageService;