import React from 'react';
import { Link } from 'react-router-dom';

const Payments = () => {
   return (
      <div id="pay" className="  d-flex justify-content-center my-5">
         <h2>Payments system coming soon</h2>

         <Link to="/"><button className="btn btn-primary mx-5">Go Back home</button>
         </Link>

      </div>
   );
};

export default Payments;