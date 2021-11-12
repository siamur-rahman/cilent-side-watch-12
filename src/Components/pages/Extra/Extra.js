
import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import banner1 from './../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Extra = () => {
   return (

      <Box
         sx={{
            display: 'flex',
            justifyContent: 'space-around',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
         }}>
         <Card sx={{ maxWidth: 345, bgcolor: 'background.paper', }}>

            <Box sx={{
               display: 'flex',
               justifyContent: 'space-around',
               p: 1,

               bgcolor: 'background.paper',
            }}>Up Coming</Box>
            <CardActionArea>
               <CardMedia
                  component="img"
                  height="140"
                  image={banner1}
                  alt="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     APIcet 44
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Superocean, M17368D71I1S2 BOX PAPERS 2022
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary">
                  See more info
               </Button>
            </CardActions>
         </Card>
         <Card sx={{ maxWidth: 345 }}>

            <Box sx={{
               display: 'flex',
               justifyContent: 'space-around',
               p: 1,

               bgcolor: 'background.paper',
            }}>Up Coming</Box>
            <CardActionArea>
               <CardMedia
                  component="img"
                  height="140"
                  image={banner2}
                  alt="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     Rizard254
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Superocean, M17368D71I1S2 BOX PAPERS 2022
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary">
                  See more info
               </Button>
            </CardActions>
         </Card>
         <Card sx={{ maxWidth: 345 }}>

            <Box sx={{
               display: 'flex',
               justifyContent: 'space-around',
               p: 1,

               bgcolor: 'background.paper',
            }}>Up Coming</Box>
            <CardActionArea>
               <CardMedia
                  component="img"
                  height="140"
                  image={banner3}
                  alt="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     HEZARD35F3
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     Superocean, M17368D71I1S2 BOX PAPERS 2022
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary">
                  See more info
               </Button>
            </CardActions>
         </Card>
      </Box>

   );
};

export default Extra;