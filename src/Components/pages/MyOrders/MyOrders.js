import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MyOrders.css';
import Order from '../Orders/Order';

// import Order from '../Orders/Order';


const MyOrders = () => {
   return (
      <div id="myOrder" className="Order  d-flex justify-content-center my-5">
         {/* <Header></Header> */}
         <div className="container mb-5">
            <h2 className="text-primary m-3">My Orders</h2>
            <div className="row">
               <Order></Order>
            </div>
         </div>
         {/* <Footer></Footer> */}
      </div>
   );
};

export default MyOrders;
