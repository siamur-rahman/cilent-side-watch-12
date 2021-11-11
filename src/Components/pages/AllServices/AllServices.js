import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';


// import './Services.css';

const AllServices = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('https://sheltered-harbor-10216.herokuapp.com/services/')
         .then(res => res.json())
         .then(data => setServices(data));
   }, [])

   return (
      <div id="service" >
         <Header></Header>
         <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#e0e0e0"
         >
            <h2 className=" mt-5 d-flex justify-content-center">Watch Collections</h2>

         </Grid>

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