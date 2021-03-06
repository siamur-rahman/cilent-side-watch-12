import React from 'react';

import './MyOrders.css';
import Order from '../Orders/Order';
import { Link } from 'react-router-dom';



const MyOrders = () => {
   return (
      <div id="myOrder" className="Order  d-flex justify-content-center my-5">

         <div className="container mb-5">
            <div className="d-flex justify-content-around"> <h2 className="text-primary m-3">Manage all Orders</h2>
               <Link to="/"><button className="btn btn-primary mx-5">Go Back home</button>
               </Link></div>

            <div className="row">
               <Order></Order>
            </div>
         </div>

      </div>
   );
};

export default MyOrders;
