import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { UserContext } from '../../../App';

const Navbar = () => {
    const { userInfo } = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="img-fluid" src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item mx-3">
                            <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="/home">Home</Link>
                        </li>

                        <li className="nav-item mx-3">
                            <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="#/">About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="/services">Services</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>
                        {
                            userInfo.photoURL ?
                                <li className="nav-item mx-3">
                                    <Link className="  px-5    mx-3" aria-current="page" to="/dashboard"><img style={{width: '50px', borderRadius: '50%' }} src={userInfo.photoURL} alt=""/> </Link>
                                </li> :
                                <li className="nav-item mx-3">
                                    <Link className="nav-link px-5 active fw-bolder fs-5 mx-3" aria-current="page" to="/login">Login</Link>
                                </li>
                        }

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;