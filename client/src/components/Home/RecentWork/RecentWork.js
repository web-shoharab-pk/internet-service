import React from 'react';
import './RecentWork.css';
import workDemo1 from '../../images/serviceDemo.jpg';
import workDemo2 from '../../images/serviceDemo2.jpg';

const RecentWork = () => {
    return (
        <section className="container mt-5">
            <div>
                <h1 style={{ color: '#C4179F' }}>Our Recent Works</h1>
            </div>
            <div className="row">
                <div className="col-md-6 p-3">
                    <div>
                        <div>
                            <img className="img-fluid p-3" src={workDemo1} alt="" />
                        </div>
                        <div>
                            <img className="img-fluid p-3" src={workDemo2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-3 d-flex justify-content-center text-light align-items-center">
                   
                        <div className="recentWorkDescription p-3">
                            <h1>Exceptional Internet Service <br /> On Our Team</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio a tempora recusandae ex ab consequuntur adipisci consequatur natus, quos, id corporis soluta numquam quaerat ducimus ad sint facere mollitia harum magni iusto! Quam ipsum dolor iure illum mollitia, rerum saepe.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iste.
                        </p>
                            <button className="anchorBtn">Learn more...</button>
                        </div>
                    </div> 
            </div>
        </section>
    );
};

export default RecentWork;