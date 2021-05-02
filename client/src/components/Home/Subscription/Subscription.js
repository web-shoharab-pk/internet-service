import React from 'react';
import './Subscription.css'

const Subscription = () => {
    return (
        <section className="subscription d-flex justify-content-center align-items-center p-3" style={{height: '40vh'}}>
            <div>
                <div className="text-center">
                    <h1 className="text-light">Subscribe for more Updates</h1>
                   <input style={{width: '100%'}} type="text" placeholder="Inter Your Email" className="form-control my-3"/> 
                    <button className="brandBtn">SUBSCRIBE</button>
                </div>
            </div>
        </section>
    );
};

export default Subscription;