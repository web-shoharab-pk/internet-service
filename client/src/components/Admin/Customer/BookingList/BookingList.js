import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './BookingList.css';

const BookingList = () => {
    const { userInfo } = useContext(UserContext)
    const [bookings, setBookings] = useState([]) 
    useEffect(() => {
        fetch(`https://secret-crag-61586.herokuapp.com/bookingListById/${userInfo.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [userInfo.email])

    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">
                    <table className="table">
                        <thead>
                            <tr className="text-secondary fs-5">
                                <th scope="col">Name</th>
                                <th scope="col">Service</th>
                                <th scope="col">$Price</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(book =>
                                    <tr>
                                        <th scope="col">{book.name}</th>
                                        <th scope="col">{book.serviceName}</th>
                                        <th scope="col">{book.servicePrice}</th>
                                        <th scope="col">{book.date}</th>
                                        <th scope="col">{book.orderStatus}</th>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </main>
    );
};

export default BookingList;