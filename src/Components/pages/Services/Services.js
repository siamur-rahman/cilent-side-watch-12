import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('https://sheltered-harbor-10216.herokuapp.com/services/')
         .then(res => res.json())
         .then(data => setServices(data.slice(0, 6)));
   }, [])

   return (
      <Box sx={{ width: 'auto' }} >

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
         <div >
            {
               services.map(service => <Service
                  key={service._id}
                  service={service}
               ></Service>
               )
            }
         </div>
      </Box>
   );
};

export default Services;