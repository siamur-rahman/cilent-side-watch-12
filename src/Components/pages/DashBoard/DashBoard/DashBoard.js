import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrders from '../../MyOrders/MyOrders';
// import Order from '../../Orders/Order';
// import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Payments from '../../Payments/Payments';
// import Review from '../../Review/Review';
import useFirebase from '../../../hooks/useFirebase';
import Button from '@restart/ui/esm/Button';

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';


const drawerWidth = 200;

function DashBoard(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   // const { sx, ...other } = props;

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
            <Link to="/pay"><Button color="inherit">Payments</Button></Link>
            <Link to="/order"><Button color="inherit">Orders</Button></Link>
            <Link to="/addNewService"><Button color="inherit">Add products</Button></Link>
            <Link to="/order"><Button color="inherit">Make Admin</Button></Link>
            <Link to="/order"><Button color="inherit">Manage all Orders</Button></Link>


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
            <Typography paragraph>
               <MyOrders></MyOrders>
               <Divider />
               <Payments></Payments>
               <Divider />

            </Typography>


         </Box>
      </Box>
   );
}

DashBoard.propTypes = {

   window: PropTypes.func,
};

export default DashBoard;
