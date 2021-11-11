import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MyOrders.css';
import Order from '../Orders/Order';
import { Link } from 'react-router-dom';
// import Order from '../Orders/Order';


const MyOrders = () => {
   return (
      <div id="myOrder" className="Order  d-flex justify-content-center my-5">
         {/* <Header></Header> */}
         <div className="container mb-5">
            <div className="d-flex justify-content-around"> <h2 className="text-primary m-3">My Orders</h2>
               <Link to="/"><button className="btn btn-primary mx-5">Go Back home</button>
               </Link></div>

            <div className="row">
               <Order></Order>
            </div>
         </div>
         {/* <Footer></Footer> */}
      </div>
   );
};

export default MyOrders;
