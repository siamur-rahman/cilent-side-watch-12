import React from 'react';




import { Divider, Typography } from '@mui/material';
import ServicesDetails from '../../../ServiceDetails/ServicesDetails';



const DashBoardHome = () => {
   return (
      <div>
         <Typography paragraph>
            <ServicesDetails></ServicesDetails>
            <Divider />



         </Typography>
      </div>
   );
};

export default DashBoardHome;