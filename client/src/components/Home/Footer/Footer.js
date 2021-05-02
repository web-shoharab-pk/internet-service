import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerLogo from '../../images/light-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className="footerSection">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-3">
                        <Link className="" to=""> <img src={footerLogo} alt="" /></Link>
                        <p className="text-secondary mt-3">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div>
                            <Link className="linkIcon" to=""><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link className="linkIcon mx-3" to=""><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link className="linkIcon" to=""><FontAwesomeIcon icon={faYoutube} /></Link>
                            <Link className="linkIcon mx-3" to=""><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>

                    </div>
                    <div className="col-md-3 p-3">
                        <h4>Company</h4>
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/">About</Link>
                        <Link className="link" to="/">Pricing</Link>
                        <Link className="link" to="/">Services</Link>
                        <Link className="link" to="/">Technology</Link>
                    </div>
                    <div className="col-md-3 p-3">
                        <h4>Services</h4> 
                        <Link className="link" to="/">Plans & Pricing</Link>
                        <Link className="link" to="/">InfiFlix & Media</Link>
                        <Link className="link" to="/">Virtual Interface</Link>
                        <Link className="link" to="/">Dedicated Internet</Link>
                        <Link className="link" to="/">Ethernet Transport</Link>
                    </div>
                    <div className="col-md-3 p-3">
                        <h4>Quick Links</h4> 
                        <Link className="link" to="/">Products</Link>
                        <Link className="link" to="/">Latest News</Link>
                        <Link className="link" to="/">Case Studies</Link>
                        <Link className="link" to="/">Where We Are</Link>
                        <Link className="link" to="/">Recent Queries</Link>
                    </div>
                </div> 
                <hr/>
                <h6 className="text-center p-3 m-0 text-info">© 2020 InfiNxt | Design by web-shoharab-pk. all rights & Privacy Policy reserve by web@Shoharab</h6>
            </div>
        </section>
    );
};

export default Footer;