import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [serviceAdded, setServiceAdded] = useState(false)
    const [imageURL, setImageURL] = useState({}); 

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)

    }
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'e1f5a6095b7d9d00411e4c204ddebf7f')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setImageURL(response.data.data.display_url); 
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleSubmit = (e) => {
        const serviceInfo = {
            name: info.name,
            serviceImage: imageURL,
            description: info.description,
            price: info.price
        }

        fetch('https://secret-crag-61586.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceInfo)
        })
            .then(response => response.json())
            .then(data => {
                setServiceAdded(data)
            })
        e.preventDefault()

    }
    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">

                    {
                        serviceAdded ?
                            <h1 style={{ color: '#FE3748' }}>Add Service Done!!</h1>
                            :
                            <h1 style={{ color: '#FE3748' }}>Add Service</h1>
                    }

                    <br />
                    <div>
                        <form>
                            <label className="fs-5 fw-bold text-secondary">service name*</label>
                            <input onBlur={handleBlur} className="form-control w-50" placeholder="Name is required" required name="name" />
                            <br />
                            <label className="fs-5 fw-bold text-secondary">description*</label>
                            <input onBlur={handleBlur} className="form-control w-50" placeholder="description" required name="description" />
                            <br />
                            <label className="fs-5 fw-bold text-secondary">price*</label>
                            <input onBlur={handleBlur} className="form-control w-50" placeholder="Price" required name="price" />
                            <br />
                            <label className="fs-5 fw-bold text-secondary">Upload service image</label>
                            <input style={{ width: '100%' }} name="photo" className="form-control w-50" onChange={handleImageUpload} type="file" required />
                            <br />
                            <button onClick={handleSubmit} type="submit" className="brandBtn w-50 text-center">SUBMIT</button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default AddService;