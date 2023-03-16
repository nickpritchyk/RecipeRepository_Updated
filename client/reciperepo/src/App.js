import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Favorites from './pages/favorites'
import Navbar from './components/NavBar';
import Footer from "./components/Footer";
import Login from "./pages/login";
import Register from './pages/register';
import Axios from 'axios';

Axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/favorites" element={<Favorites />}> </Route>
        </Routes>
        <div className="footer-space"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;