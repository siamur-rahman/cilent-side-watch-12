// import { margin } from '@mui/system';
import React from 'react';
// import { Carousel } from 'react-bootstrap';
import './HeadrMain.css';
import { Grid } from '@mui/material';

const HeaderMain = () => {
   return (

      <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"

      >

         <main style={{ height: '650px' }} className=" header-container">
            <Grid
               container
               direction="row"
               justifyContent="center"
               alignItems="center"
               padding="30px"

            >
               <div className="col-md-12 col-lg-4  offset-md-1   fw-bolder text-white">

                  <h1>WATCH <span style={{ color: '#F05568  ' }}>GALARY </span></h1>

                  <h4>Needs of Cuyahoga with <br />our  County for more than 110 years</h4><br /><br />
                  <p style={{ color: '#F0506F  ' }} className='text-white '>We are a fully accredited  by The Joint Commission, with a certified Level II Trauma Center. Cleveland Clinic Cancer Center at Fairview Hospital Moll Pavilion, located directly across the street from our main building…!</p>
                  <a href="#book-ride" style={{ backgroundImage: 'linear-gradient(to left,#3645B1 , #1F2DD8,#1FA8D8 ,#1F73D8  )' }} className="btn btn-lg fw-bolder text-white">More watches</a>
               </div>

            </Grid>
         </main>
      </Grid>

   );
};

export default HeaderMain;