import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from './HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <main>
            <section>
                <Navbar></Navbar>
            </section>
            <section className="headerMain">
                <HeaderMain></HeaderMain>
            </section>
        </main>
    );
};

export default Header;