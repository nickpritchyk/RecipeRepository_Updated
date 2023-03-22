import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import "../styles/RecipeCard.css";

const FavoritesCard = ({resultsData}) => {
        console.log(resultsData)

    
    if(resultsData){
        // console.log(resultsData)
        return(
            resultsData.map(item => {
                return(
                <Col className='mt-5' xs={6} md={4}>
                <Card className='card-hover'>
                    <Card.Img fluid className='img' variant="top" src={item.image} />
                    <Card.Body className='card-body'>
                        <Card.Title className='title' >{item.title}</Card.Title>
                        <Card.Text>
                            Stuff inside body
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                )
            })

        )
    } 
}

export default FavoritesCard;