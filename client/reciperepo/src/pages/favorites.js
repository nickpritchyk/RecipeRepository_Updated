import React, { useEffect, useState } from 'react';
import  Login  from '../pages/login.js';
import Axios from 'axios';
function Favorites () {
    // console.log(login_State)
    const [loginState, setLoginState] = useState("");

    useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
          if(response.data.loggedIn == true){
          setLoginState(response.data.user[0].username)
          }
  })
  }, []);

      return(
        <div>
          Favorites, all your favorites in one place!
          {loginState}
        </div>
      )
}

export default Favorites;
