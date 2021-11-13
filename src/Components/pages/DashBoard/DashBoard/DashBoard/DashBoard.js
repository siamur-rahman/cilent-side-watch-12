import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';

import {
   Switch,
   Route,
   Link,
   useRouteMatch
} from "react-router-dom";

import useFirebase from '../../../../hooks/useFirebase';

import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';

import useAuth from '../../../../hooks/useAuth';
import AddNewServices from '../../../AddNewServices/AddNewServices';
import Payments from '../../../Payments/Payments';
import Order from '../../../Orders/Order';
import MyOrders from '../../../MyOrders/MyOrders';


const drawerWidth = 200;

function DashBoard(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   let { path, url } = useRouteMatch();
   const { admin } = useAuth();
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };
   const { logout } = useFirebase();
   const drawer = (

      <Box>
         <Toolbar />
         <Divider />
         <Box
            sx={{

               display: 'flex',
               alignItems: 'flex-start',
               flexDirection: 'column',
               p: 1,
               m: 1,
               bgcolor: 'background.paper',
            }}

         >
            <Link to={`${url}`}><Button color="inherit">Dash Board</Button></Link>
            <Link to={`${url}/pay`}><Button color="inherit">Payments</Button></Link>
            <Link to={`${url}/order`}><Button color="inherit">Orders</Button></Link>

            {admin &&
               <Box>
                  <Link to={`${url}/addNewService`}><Button color="inherit">Add products</Button></Link>

                  <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                  <Link to={`${url}/myOrder`}><Button color="inherit">Manage all Orders</Button></Link>

               </Box>
            }

            <Button onClick={logout} color="inherit">Logout</Button>
         </Box>
      </Box >
   );

   const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar
            position="fixed"
            sx={{
               width: { sm: `calc(100% - ${drawerWidth}px)` },
               ml: { sm: `${drawerWidth}px` },
            }}
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" noWrap component="div">
                  Dash Board
               </Typography>
            </Toolbar>
         </AppBar>
         <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
         >

            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true,
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
               }}
            >
               {drawer}
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>
         <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
         >
            <Toolbar />

            <Switch>
               <Route exact path={path}>
                  <DashBoardHome></DashBoardHome>
               </Route>
               <Route exact path={`${path}/pay`}>
                  <Payments></Payments>
               </Route>
               <Route exact path={`${path}/order`}>
                  <Order></Order>
               </Route>

               <Route exact path={`${path}/myOrder`}>
                  <MyOrders></MyOrders>
               </Route>
               <Route exact path={`${path}/addNewService`}>
                  <AddNewServices></AddNewServices>
               </Route>
               <Route exact path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
               </Route>



            </Switch>

         </Box>
      </Box>
   );
}

DashBoard.propTypes = {

   window: PropTypes.func,
};

export default DashBoard;
