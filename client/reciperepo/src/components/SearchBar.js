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
        // const tester = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=63bbfa20bb0d42b8927bc25fe8795946&query=' + search + ''
        fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=63bbfa20bb0d42b8927bc25fe8795946&query=' + search + '')
            .then(response => response.json())
            .then((json) => {
                setResults(json.results);
                setLoading(false);
                // console.log(typeof json)
        });
    }

    return (
        <Container>
            <Row>
            <form className='search-div' onSubmit={handleSearch}>
                <input type="text" placeholder="Search for recipes..." onChange={(e) =>  setSearch(e.target.value)}/><button className='search-btn' type='submit' onSubmit={handleSearch}> <FaSearch/></button>
            </form>
            </Row>
            <Container>
                <Row>
                {loading ? ( <h3>Loading...</h3>
                ) : (
                    <RecipeCard results={results}/>
                )}
                </Row>
            </Container>
        </Container>
    );
}

export default SearchBar;