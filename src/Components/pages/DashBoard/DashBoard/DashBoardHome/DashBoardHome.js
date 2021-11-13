import React from 'react';




import { Divider, Typography } from '@mui/material';
// import ServicesDetails from '../../../ServiceDetails/ServicesDetails';
import Payments from '../../../Payments/Payments';



const DashBoardHome = () => {
   return (
      <div>
         <Typography paragraph>
            {/* <ServicesDetails></ServicesDetails> */}
            <Divider />
            <Payments></Payments>


         </Typography>
      </div>
   );
};

export default DashBoardHome;