import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => setServices(data.slice(0, 6)));
   }, [])

   return (
      <div  >
         <h2 className=" mt-5 d-flex justify-content-center">Watches</h2>
         <hr />




         <div className="service-container">
            {
               services.map(service => <Service
                  key={service._id}
                  service={service}
               ></Service>
               )
            }
         </div>
      </div>
   );
};

export default Services;