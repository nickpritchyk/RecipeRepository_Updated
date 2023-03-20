import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";


function Favorites () {
    // console.log(login_State)
    const [loginState, setLoginState] = useState("");
    const [favoriteID, setFavoriteID] = useState([]);
    const [favResult, setFavResults] = useState();
    const [favArray, setFavArray] = useState();
    const [resultsData, setResultsData] = useState([]);

    console.log("FAV ARRAY: ", favArray)
    console.log("REAL SHIT: ", resultsData)

    Axios.get("http://localhost:3001/login").then((response) => {
          if(response.data.loggedIn == true){
            setLoginState(response.data.user[0].username)
            }
          }
    )

    Axios.post("http://localhost:3001/favorites", {
              username: loginState
            })
              .then((response) => {
                setFavArray('sup')
                // console.log("FAV ARRAY: ", favArray)
              })

    useEffect(() => {
            fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=63bbfa20bb0d42b8927bc25fe8795946')
              .then(response => response.json())
              .then((data) => {
                  setResultsData(data)
                  // console.log("REAL SHIT: ", resultsData)
              });
  }, []);


    // c2fa0d46b1eb4021943dad1c0672e6a2 

      return(

        // resultsData.map((item) => {
          // return(
          <div className="favorites-wrapper">
            <h1> All of your favorites in one place! </h1>
            <div className="favorite-card">
            <Col className='mt-5' xs={6} md={4}>
              <Card className='card-hover'>
                  {/* <Card.Img fluid className='img' variant="top" src={item.image} /> */}
                  <Card.Body className='card-body'>
                      {/* <Card.Title className='title' >{item.title}</Card.Title> */}
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          </div>
        </div>
          )
    // }
// )
// )
  }

export default Favorites;
