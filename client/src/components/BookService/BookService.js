 import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Admin/Sidebar/Sidebar';
import Shipment from '../Shipment/Shipment';
 
 const BookService = () => {
    const {bookingService, userInfo} = useContext(UserContext); 
     return (
         <main>
          <div className="row">
              <div className="col-md-2">
                <Sidebar></Sidebar> 
              </div>
              <div className="col-md-10">
                <div>
                    <div className="d-flex justify-content-around text-secondary p-3 mt-5">
                        <h4>Service Name</h4>
                        <h4>$Price</h4>
                        <h4>User Name</h4> 
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-around">
                        <h4>{bookingService.name}</h4>
                        <h4>{bookingService.price}</h4>
                        <h4>{userInfo.displayName}</h4> 
                    </div>
                    <Shipment bookingService={bookingService} userInfo={userInfo}></Shipment>
                </div>
              </div>
          </div>   
         </main>
     );
 };
 
 export default BookService;