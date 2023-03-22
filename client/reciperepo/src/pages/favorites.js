import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import FavoritesCard from '../components/FavoritesCard'


function Favorites () {
    const [loginState, setLoginState] = useState("");
    const [resultsData, setResultsData] = useState([]);
    const [loading, setLoading] = useState(false);
    let temp_favArr;

    const loginFetch = () => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if(response.data.loggedIn === true){
          setLoginState(response.data.user[0].username);
          temp_favArr = response.data.user[0].username;

          Axios.post("http://localhost:3001/favorites", {
            username: temp_favArr
          })
          .then((response) => {
            setLoading(true);
            var newArr = [];
            for(let i=0; i<response.data.length; i++){
              fetch('https://api.spoonacular.com/recipes/' + response.data[i].favoriteID + '/information?apiKey=5a606dfe5c174e9a8738fec6292cad78')
                .then(response => response.json())
                .then((data) => {
                  newArr.push(data);
                  setResultsData(newArr);
                });
                setLoading(false);
            }
          })
        }

      })
    }

    useEffect(() => {
      loginFetch();
  }, []);
  // console.log(favArray)
  // console.log(resultsData)


    // c2fa0d46b1eb4021943dad1c0672e6a2 

      return(
        (resultsData) &&
          <div className='favorites'>
            <Container>
                <Row>
                {loading ? ( <h3>You do not have any favorites</h3>
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
