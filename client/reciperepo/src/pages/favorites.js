import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import FavoritesCard from '../components/FavoritesCard'


function Favorites () {
    // console.log(login_State)
    const [loginState, setLoginState] = useState("");
    // const [favoriteID, setFavoriteID] = useState([]);
    // const [favResult, setFavResults] = useState();
    const [favArray, setFavArray] = useState();
    const [resultsData, setResultsData] = useState({});
    const [loading, setLoading] = useState(false)

    const loginFetch = () => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if(response.data.loggedIn === true){
          setLoginState(response.data.user[0].username);
        }

        Axios.post("http://localhost:3001/favorites", {
          username: response.data.user[0].username
        })
          .then(() => {
            setFavArray(response.data);
            // fetchFavorites()
            // console.log("FAV ARRAY: ", favArray)
          })
        
      })
    }

    const fetchFavorites = () => {
      setLoading(true);
      fetch('https://api.spoonacular.com/recipes/644366/information?apiKey=b972573ed1ca4324b1d1eeeb18e27bf6')
          .then(response => response.json())
          .then((data) => {
            let temp = data
            setLoading(false);
            setResultsData(temp);
              // console.log("REAL SHIT: ", resultsData)
          });
        }

    // const fetchFavArray = () => {
    //   Axios.post("http://localhost:3001/favorites", {
    //       username: loginState
    //     })
    //       .then((response) => {
    //         setFavArray(response.data);
            
    //       })
    // } 

    useEffect(() => {
      // loginFetch();
      fetchFavorites();


  }, []);
  // console.log(favArray)
  // console.log(resultsData)


    // c2fa0d46b1eb4021943dad1c0672e6a2 

      return(
          <div className='favorites'>
            <Container>
                <Row>
                {loading ? ( <h3>Loading...</h3>
                ) : (
                    <FavoritesCard resultsData={resultsData}/>
                )}
                </Row>
            </Container>
          </div>
        // <div></div>
)
}

export default Favorites;
