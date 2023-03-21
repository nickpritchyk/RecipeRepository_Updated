import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import "../styles/RecipeCard.css";
import Axios from 'axios'
import StarOutlineIcon from '@mui/icons-material/StarOutline';


const RecipeCard = ({results}) => {
    let favorite = 0;
    const [favoriteState, setFavoriteState] = useState(false);
    const [loginState, setLoginState] = useState("");
    // console.log(results)

    const addFavorite = () => {
        Axios.post("http://localhost:3001/", {
        favorite: favorite,
        username: loginState,
        }).then((response) => {
            if(response.data.message) {
                setFavoriteState(true)
            } else if(response.data.err) {
                console.log(response.data.err)
            } else {
                console.log(response.data.message)
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if(response.data.loggedIn == true){
            setLoginState(response.data.user[0].username)
            }
    })
    }, []);

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
                <button className='favorite-btn' onClick={() => {
                    favorite=(item.id);
                    addFavorite();
                    }}>
                    <StarOutlineIcon></StarOutlineIcon>
                </button>
            </Card>
        </Col>
            )
        })
    )
}

export default RecipeCard;