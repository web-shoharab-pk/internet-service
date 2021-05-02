import { faCommentDots, faHome, faListAlt, faPlusSquare, faSignOutAlt, faSort, faTasks, faUserPlus, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';


const Sidebar = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false) 

    useEffect(() => {
        fetch('https://secret-crag-61586.herokuapp.com/adminAccess', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userInfo.email })
        })
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem('admin', data)
                setIsAdmin(data)
            })
    }, [userInfo.email])






    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful
            setUserInfo("")
            sessionStorage.removeItem('admin')
            sessionStorage.removeItem('token')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="sidebar py-5">
            {
             isAdmin || (sessionStorage.getItem('admin') === 'true')  ?
                    <div>
                        <Link className="text-light text-center p-1" to="/home"><h1><FontAwesomeIcon icon={faUserShield} /></h1></Link>
                        <div className="sidebarOption  ">
                            <Link className="sidebarLink text-light" to="/admin/orderList"><FontAwesomeIcon icon={faListAlt} /> Order list</Link>
                        </div>
                        <div className="sidebarOption">
                            <Link className="sidebarLink text-light" to="/admin/addService"><FontAwesomeIcon icon={faPlusSquare} /> Add Services</Link>
                        </div>
                        <div className="sidebarOption">
                            <Link className="sidebarLink text-light" to="/admin/addAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                        </div>
                        <div className="sidebarOption">
                            <Link className="sidebarLink text-light" to="/admin/manageService"><FontAwesomeIcon icon={faTasks} /> Manage Services</Link>
                        </div>
                    </div>
                    :
                    <div>
                        <div>
                            <Link className="sidebarLink text-light" to="/home"><FontAwesomeIcon icon={faHome} /> Back Home </Link>
                        </div>
                        <div className="sidebarOption">
                            <Link className="sidebarLink text-light" to="/admin/bookingService"><FontAwesomeIcon icon={faSort} /> Booking</Link>
                        </div>
                        <div className="sidebarOption">
                            <Link className="sidebarLink text-light" to="/admin/bookingList"><FontAwesomeIcon icon={faListAlt} /> Booking list</Link>
                        </div>
                        <div className="sidebarOption">
                            <Link className="sidebarLink text-light" to="/admin/orderReview"><FontAwesomeIcon icon={faCommentDots} /> Order Review</Link>
                        </div>
                    </div>


            }

            <div onClick={handleLogout} className="sidebarOption logout">
                <Link className="sidebarLink text-light" to="/home"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
            </div>

        </div>
    );
};

export default Sidebar;