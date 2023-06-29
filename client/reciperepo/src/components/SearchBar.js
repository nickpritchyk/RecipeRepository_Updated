import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'


export const SearchBar = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    
    const handleSearch = async(e) => {
        e.preventDefault();
        setLoading(true);
        fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=d2ce296a1d0c42a49d2d707634976ee9&query=' + search + '&number=20')
            .then(response => response.json())
            .then((json) => {
                setResults(json.results);
                setLoading(false);
                // console.log(typeof json)
        });
    }

    return (
        <div className='searchbar-container'>
            <form className='search-bar' onSubmit={handleSearch}>
                <input className="input" placeholder="Search for recipes..." onChange={(e) =>  setSearch(e.target.value)}/>
                <button className='search-btn' type='submit' onSubmit={handleSearch}> <FaSearch/></button>
            </form>
            <Container>
                <Row>
                {loading ? ( <h3>Loading...</h3>
                ) : (
                    <RecipeCard results={results}/>
                )}
                </Row>
            </Container>
        </div>
    );
}

export default SearchBar;