import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import AllService from './AllService';
import './Services.css';


const Services = () => {




    return (
        <main>
            <Navbar></Navbar>
            <section className="container   ">
                <AllService></AllService>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Services;