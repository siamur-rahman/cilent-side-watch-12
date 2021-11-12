import React from 'react';
import { Grid } from '@mui/material';

import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';



const Review = () => {
   return (

      <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
         padding="30px"
         backgroundColor="#e0e0e0"

      >

         <Card sx={{ maxWidth: 345 }}>

            <Box sx={{
               display: 'flex',
               justifyContent: 'space-around',
               p: 1,

               bgcolor: 'background.paper',
            }}>  <Typography container
               direction="row"
               justifyContent="center"
               alignItems="center"
               padding="30px"
               backgroundColor="#e0e0e0"
               gutterBottom variant="h5" component="div">
                  WATCH <span style={{ color: '#F05568  ', }}>GALARY</span>

               </Typography></Box>
            <CardActionArea>

               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     Reviews
                     <StarIcon /><StarIcon /><StarIcon />
                     <span style={{ color: '#F5468  ', }}>(3.5k)</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Find potential problems with the site, if any. When reviewing the site, try to remain unbiased. If you only write reviews about sites that you like, your audience will not appreciate that you only talk about the positive aspects.
                  </Typography>
               </CardContent>
            </CardActionArea>

         </Card>
      </Grid>
   );
};

export default Review;

