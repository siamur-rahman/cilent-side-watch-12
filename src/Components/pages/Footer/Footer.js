import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Grid } from '@mui/material';
// import { Grid } from '@mui/material';

const Footer = () => {
   return (
      <footer >
         <div className="container">


            <Grid container
               direction="row"
               justifyContent="center"
               alignItems="center"
               padding="30px"
               backgroundColor="black"
               color="white"
            >

               <div className="col-md-4">
                  <h4 container
                     direction="row"
                     justifyContent="center"
                     alignItems="center">About Us</h4>
                  <p>Welcome to Watch Galary. We are pleased that you have selected us for your care. Our service is committed to providing comprehensive, patient-centered oral health care, within the scope of our educational programs, since 1878. This means that our coordinated health care team, consisting of our faculty, students, and staff, will fully inform you of the findings of our examination and the available treatment options.!</p>
                  <div className='d-flex justify-content-evenly' style={{ fontSize: '2em' }}>
                     <FontAwesomeIcon icon={faFacebook} />
                     <FontAwesomeIcon icon={faInstagram} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
               </div>
            </Grid>
            {/* </div> */}

         </div>
      </footer>
   );
};

export default Footer;