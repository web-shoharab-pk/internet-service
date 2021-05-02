import React, { useContext } from 'react';
import './Admin.css';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

const Admin = () => {
    const { userInfo } = useContext(UserContext);
    return (
        <main className="admin">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10  p-5">
                    <div>
                        <h1 style={{ color: '#f92a3b' }}>Welcome your dashboard</h1>
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                                <img style={{ borderRadius: '50%' }} src={userInfo.photoURL} alt="" />
                                <h3>Name: {userInfo.displayName}</h3>
                                <h4>Email: {userInfo.email}</h4>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
};

export default Admin;