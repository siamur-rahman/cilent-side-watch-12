import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Card, Row, Col } from 'react-bootstrap';


const AllService = ({ service }) => {

   const { _id, name, description, } = service;
   // console.log(service2);
   return (
      <Container className=" p-5 service-cards">


         <Row>
            <Col md={5}>
               <div>
                  <Card>
                     <Card.Img variant="top" src="{img}" />
                  </Card>
               </div>
            </Col>
            <Col md={7}>
               <Card style={{ width: '18rem' }} >
                  <Card.Body className="cart-dody">

                     <Card.Title>"{name}"</Card.Title>
                     <Card.Text>"{description}"
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
         <Link to={`/home/${_id}`}>
            <div className=" w-100 align-items-center ">
               <button className="  btn-warn mt-3">
                  <FontAwesomeIcon icon={faShoppingCart} /> Buy now </button>
            </div>
         </Link>
      </Container>
   );
};

export default AllService;