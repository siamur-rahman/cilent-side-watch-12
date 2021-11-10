import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';


// import './Services.css';

const AllServices = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => setServices(data));
   }, [])

   return (
      <div id="service" >
         <Header></Header>



         <h2 className=" mt-5 d-flex justify-content-center">Watches</h2>
         <hr />


         <div className="service-container">

            {
               services.map(service => <AllService
                  key={service._id}
                  service={service}

               ></AllService>
               )

            }
         </div>

         <Footer></Footer>
      </div>


   );
};

export default AllServices;