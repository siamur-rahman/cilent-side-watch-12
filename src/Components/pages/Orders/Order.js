import React from 'react';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Orders.css';



const Order = ({ expert, service }) => {




   return (
      <div className="col-lg-4 col-sm-6 col-12 Order-card">
         <img src="img" alt="" />
         <h3>product name : </h3>
         <h5 className="text-danger">description :</h5>
         <button className=" button mb-2">   Order place <FontAwesomeIcon icon={faShoppingCart} /> </button>


      </div>
   );
};

export default Order;