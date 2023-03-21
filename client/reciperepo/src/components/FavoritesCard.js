import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import "../styles/RecipeCard.css";

const FavoritesCard = ({resultsData}) => {
    console.log(resultsData)

    return(
            <Col className='mt-5' xs={6} md={4}>
            <Card className='card-hover'>
                <Card.Img fluid className='img' variant="top" src='' />
                <Card.Body className='card-body'>
                    <Card.Title className='title' >{resultsData.title}</Card.Title>
                    <Card.Text>
                        Stuff inside body
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            )
}

export default FavoritesCard;