import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import './OrderedList.css';

const OrderedList = () => {
    const history = useHistory()
    const [allOrder, setAllOrder] = useState([])
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        fetch('https://secret-crag-61586.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)
                setSpinner(data) 
            })
    }, [])

    const statusHandle = (e, id) => {
        const inputStatus = e.target.value;
        const status = { inputStatus }

        fetch(`https://secret-crag-61586.herokuapp.com/statusUpdateById/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(

                alert('page reload needed'),
                history.push('/dashboard')
            )

    }

    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">
                    {
                        spinner ?
                            <table className="table">
                                <thead>
                                    <tr className="text-secondary fs-5">
                                        <th scope="col">Name</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">$Price</th>
                                        <th scope="col">Order Date</th>
                                        <th scope="col">status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrder.map(order =>
                                            <tr key={order._id}>
                                                <th scope="row">{order.name}</th>
                                                <th scope="row">{order.serviceName}</th>
                                                <th scope="row">{order.address}</th>
                                                <th scope="row">${order.servicePrice}</th>
                                                <th scope="row">{order.date}</th>
                                                <th><div className="dropdown ">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {order.orderStatus}
                                                    </button>
                                                    <ul className="dropdown-menu w-25 dropdown-menu-dark" aria-labelledby="dropdownMenu2">
                                                        <li>
                                                            <button className="dropdown-item" type="button">
                                                                <input onClick={(e) => statusHandle(e, order._id)} className="btn text-light fw-bold btn-info" type="submit" value="pendding" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="dropdown-item" type="button">
                                                                <input onClick={(e) => statusHandle(e, order._id)} className="btn text-light fw-bold btn-info" type="submit" value="On Going" />
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="dropdown-item" type="button">
                                                                <input onClick={(e) => statusHandle(e, order._id)} className="btn text-light fw-bold btn-info" type="submit" value="Done" />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div></th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            :
                            <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border" role="status">
                                <span>Loading...</span>
                            </div>
                        </div>
                    }


                </div>
            </div>

        </main>
    );
};

export default OrderedList;