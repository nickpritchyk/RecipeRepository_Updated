import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import "../styles/RecipeCard.css";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const RecipeCard = ({results}) => {
    return(
        results.map((item) => {
            return(
        <Col className='mt-5' xs={6} md={4}>
            <Card className='card-hover'>
                <Card.Img fluid className='img' variant="top" src={item.image} />
                <Card.Body className='card-body'>
                    <Card.Title className='title' >{item.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <button className='favorite-btn'>
                    <StarOutlineIcon></StarOutlineIcon>
                </button>
            </Card>
        </Col>
            )
        })
    )
}

export default RecipeCard;