import React from 'react';
import AllService from '../../Services/AllService'; 
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import RecentWork from '../RecentWork/RecentWork';
import Review from '../Review/Review';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <main>
            <Header></Header>
            <OurServices></OurServices>
             <AllService></AllService> 
            <RecentWork></RecentWork>
            <Review></Review>
            <Subscription></Subscription>
            <Footer></Footer> 
        </main>
    );
};

export default Home;