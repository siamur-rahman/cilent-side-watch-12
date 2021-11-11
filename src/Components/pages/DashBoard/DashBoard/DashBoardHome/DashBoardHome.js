import React from 'react';



import Payments from '../../../Payments/Payments';
import { Divider, Typography } from '@mui/material';
import ServicesDetails from '../../../ServiceDetails/ServicesDetails';

const DashBoardHome = () => {
   return (
      <div>
         <Typography paragraph>
            <ServicesDetails></ServicesDetails>
            <Divider />
            <Payments></Payments>
            <Divider />

            <Divider />

         </Typography>
      </div>
   );
};

export default DashBoardHome;