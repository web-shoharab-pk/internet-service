import React from 'react';
import './HeaderMain.css';
import modemImg from '../../../images/modem.png'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main className="container">
            <div className="row p-3">
                <div className="col-md-6 text-light d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="fw-bolder"> Introducing   <br />
                         InfiNet Router </h1>
                        <h1>Starting From <span>$39.89</span></h1>
                        <p className="m-0  mt-3">Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="m-0  mt-1">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                      <Link to="/services"><button className="brandBtn mt-5 me-3">GET SERVICES</button></Link>  
                    </div>

                </div>
                <div className="col-md-6  d-flex justify-content-center align-items-center p-3  headerImageDiv">
                    <div>
                        <img className="img-fluid" src={modemImg} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;