import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Extra from '../Extra/Extra';

const Home = () => {
   return (
      <div id="home">
         <Header></Header>
         <HeaderMain></HeaderMain>
         <Services></Services>
         <Extra></Extra>
         <Review></Review>
         <Footer></Footer>
      </div>
   );
};

export default Home;