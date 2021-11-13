import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Service.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Grid } from '@mui/material';


const Service = ({ service }) => {
    const { _id, name, description, img } = service;

    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}
            backgroundColor="#e0e0e0"
        >
            <Row>
                <Col md={6}>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={img} />
                        </Card>
                    </div>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body className="cart-dody">

                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Link to={`/home/${_id}`}>
                    <div className=" w-100 align-items-center ">
                        <button className="  btn-warn mt-3">
                            <FontAwesomeIcon icon={faShoppingCart} /> Buy now </button>
                    </div>
                </Link>
            </Row>

        </Grid>

    );
};

export default Service;