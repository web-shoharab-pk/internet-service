import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Payment from '../Payment/Payment';

const Shipment = ({ bookingService, userInfo }) => {
    const [info, setInfo] = useState({});
    const [shippingData, setShippingData] = useState('')
    const history = useHistory()
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setShippingData('ShippingData done')

    }
    const handlePaymentSuccess = (id, card) => {
        const orderPayInfo = { 
            userName: userInfo.displayName,
            userEmail: userInfo.email,
            userImage: userInfo.photoURL,
            name: info.name,
            email: info.email,
            phone: info.phone,
            address: info.address,
            serviceName: bookingService.name,
            servicePrice: bookingService.price,
            date: (new Date().toDateString("dddd, mmmm, yyyy")),
            paymentCardId: id,
            // paymentCardDetails: card
            orderStatus: 'pending'
        }
        fetch('https://secret-crag-61586.herokuapp.com/order&paymentDetails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderPayInfo)
        })
        .then(response => response.json())
        .then(data => {

        }) 
    }


    return (
        <section className="container mt-5">
            {
                bookingService.name ?
                <div className="row">
                    
                    <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6 p-3">
                    <h3 style={{color: '#FE3749'}}>Give me some information for better services</h3>
                        <div>
                            <form>
                                <label className="fs-5 fw-bold text-secondary">Your Name*</label>
                                <input onBlur={handleBlur} className="form-control" placeholder="Name" required name="name" />
                                <br />
                                <label className="fs-5 fw-bold text-secondary">Your Email*</label>
                                <input onBlur={handleBlur} className="form-control" placeholder="Email" required name="email" />
                                <br />
                                <label className="fs-5 fw-bold text-secondary">Your Phone No.</label>
                                <input onBlur={handleBlur} className="form-control" placeholder="Phone" name="phone" />
                                <br />
                                <label className="fs-5 fw-bold text-secondary">Address*</label>
                                <input onBlur={handleBlur} className="form-control" placeholder="address" required name="address" />
                                <br />
                                <button onClick={handleSubmit} className="brandBtn w-100 text-center">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                    <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
                        <h1 style={{color: '#FE3749'}}>Payment for your services: ${bookingService.price}</h1>
                        <Payment handlePaymentSuccess={handlePaymentSuccess}></Payment>
                    </div>
                </div>
                :
                history.push('/services')
            }

        </section>
    );
};

export default Shipment;