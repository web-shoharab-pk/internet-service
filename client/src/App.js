import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddAdmin from './components/Admin/Admin/AddAdmin/AddAdmin';
import AddService from './components/Admin/Admin/AddService/AddService'; 
import ManageService from './components/Admin/Admin/ManageService/ManageService';
import OrderedList from './components/Admin/Admin/OrderedList/OrderedList';
import BookingList from './components/Admin/Customer/BookingList/BookingList';
import GiveReview from './components/Admin/Customer/GiveReview/GiveReview';
import BookService from './components/BookService/BookService';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRouter from './components/Login/PrivateRouter';
import Services from './components/Services/Services';
import Admin from './components/Admin/Admin/Admin'

export const UserContext = createContext()

function App() {
  const [userInfo, setUserInfo] = useState({})
  const [bookingService, setBookingService] = useState({})

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, bookingService, setBookingService }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRouter path="/dashboard">
             <Admin></Admin>
          </PrivateRouter>
          <PrivateRouter path="/admin/bookingList">
            <BookingList></BookingList>
          </PrivateRouter>
          <PrivateRouter path="/admin/bookingService">
            <BookService></BookService>
          </PrivateRouter>
          <PrivateRouter path="/admin/addService">
            <AddService></AddService>
          </PrivateRouter>
          <PrivateRouter path="/services">
            <Services></Services>
          </PrivateRouter>
          <PrivateRouter path="/admin/orderReview">
            <GiveReview></GiveReview>
          </PrivateRouter>
          <PrivateRouter path="/admin/manageService">
            <ManageService></ManageService>
          </PrivateRouter>
          <PrivateRouter path="/admin/orderList">
            <OrderedList></OrderedList> 
          </PrivateRouter>
          <PrivateRouter path="/admin/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRouter>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
