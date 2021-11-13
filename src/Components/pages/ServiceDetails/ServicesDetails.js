import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Grid } from '@mui/material';



import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../../Components/hooks/useAuth';

import './ServiceDetails.css';


const ServicesDetails = () => {

   const { register, handleSubmit } = useForm();
   const { user } = useFirebase();
   const { id } = useParams();
   const [services, setServices] = useState([]);
   const { admin } = useAuth();
   //delete
   const [deleteService, setDeleteService] = useState([]);

   useEffect(() => {
      const url = `https://sheltered-harbor-10216.herokuapp.com/services/?${id}`;
      // console.log(url);
      fetch(url)
         .then(res => res.json())

         .then(data => setServices(data))
   }, [id])

   const onSubmit = data => {
      console.log(data);

   }

   //delete
   useEffect(() => {
      fetch(`https://sheltered-harbor-10216.herokuapp.com/orders/${id}`)
         .then(res => res.json())
         .then(data => setDeleteService(data));
   }, [id])

   const handleDeleteUser = id => {

      const proced = window.confirm('are you sure , you want to delete');
      if (proced) {
         const url = `https://sheltered-harbor-10216.herokuapp.com/services/${id}`;
         fetch(url, {
            method: 'DELETE'


         })
            .then(res => res.json())
            .then(data => {
               if (data.deletedCount > 0) {
                  alert('deleted successfully')
                  const remainingUsers = deleteService.filter(user => user._id !== id)
                  setDeleteService(remainingUsers);
               }
               // setUsers(data) 
            });
      }

   }

   return (
      <div className="single-service">

         <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"

         >
            <h1 className="d-flex justify-content-center mt-4">Purchase</h1>
         </Grid>
         <div >
            <Container className="add-service d-flex  justify-content-center ">
               <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  padding="20px"
               >
                  <Row  >
                     <Grid
                        container
                        padding="20px"
                     > <Col md={6}>

                           <form onSubmit={handleSubmit(onSubmit)}>

                              <input type="email" {...register("email")} value={user.email} placeholder="email" /><br />
                              <input {...register("name")} value={user.displayName} placeholder="name" /><br />
                              <textarea {...register("address")} placeholder="address" /><br />
                              <input type="number" {...register("phone")} placeholder="phone" /><br />
                              <input type="submit" />
                              <Link to={`/`}>
                                 <button onClick={() => handleDeleteUser(deleteService._id)} className=" details-btn btn btn-warning"><FontAwesomeIcon icon={faTrashAlt} />CENCEL</button>
                              </Link>
                           </form>
                        </Col>
                     </Grid>
                  </Row>
                  {!admin &&
                     <Row className=" d-flex flex-direction-column w-100 justify-content-center  mb-5 " >
                        <Col md={6}>
                           <Card style={{ width: '18rem' }}>
                              <div className="">
                                 <Card className="single-service">

                                    <Card.Title>Get this </Card.Title>
                                    <Card.Img variant="top" src={services.img} />
                                 </Card>
                              </div>
                              <Card.Body className="cardss">
                                 <Card.Title>{services.name}</Card.Title>
                                 <Card.Text>{services.description}
                                 </Card.Text>
                                 <Link to={`/`}>
                                    <button onClick={() => handleDeleteUser(deleteService._id)} className=" details-btn btn btn-warning"><FontAwesomeIcon icon={faTrashAlt} />CENCEL</button>
                                 </Link>
                              </Card.Body>
                           </Card>
                        </Col>
                     </Row>}
               </Grid>

            </Container>
         </div>

      </div >
   );
};

export default ServicesDetails;