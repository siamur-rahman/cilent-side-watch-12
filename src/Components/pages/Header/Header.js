
import './Header.css';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import Logo from '../../../logo-.jpg';
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Header = () => {
   const { user, logOut } = useFirebase();

   return (
      <div className="">
         <>
            <Navbar bg="secondary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
               <Container>

                  <Navbar.Brand href="#home" className="text-warning"> <img src={Logo} style={{ height: '30px', width: '50px' }} alt="" /> Watch Galary</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end text-white">
                     <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                     <Nav.Link as={Link} to="/service">Explore pages</Nav.Link>

                     {user?.email ?
                        <div className="text-white bg-secondary d-flex " >
                           <Nav.Link as={Link} to="/order">Pay</Nav.Link>
                           <Nav.Link as={Link} to="/order">Orders</Nav.Link>


                           <Nav.Link as={Link} to="/addNewService">Add New  Products</Nav.Link>
                           <Nav.Link as={Link} to="/about">About</Nav.Link>
                           <Navbar.Text className="mx-2">
                              Logged in success  <a href="#login">{user?.displayName}</a>
                           </Navbar.Text>
                        </div>

                        :
                        <Navbar.Text>
                        </Navbar.Text>
                     }
                     {user?.email ?
                        <Button className="text-white bg-secondary " onClick={logOut} > Logout </Button> :
                        <Nav.Link as={Link} to="/login" className="text-white bg-secondary " >Login</Nav.Link>
                     }

                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </>


      </div>
   );
};

export default Header;