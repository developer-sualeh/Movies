import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './App.css';
import { useState, useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a97c6263';
/*const movie1 =
{
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}*/
const App =  () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data =  await res.json();
    setMovies(data.Search);
}

useEffect (() =>{
    searchMovie('batman');
},[]);
return(
    <div className="app">
        <h1>Movies</h1>
        <div className='search'>
        ```<input
            onChange={(e) => setSearchTerm(e.target.value)}            
            type="text"  
            placeholder='enter the movie name' 
            value={searchTerm}/> 
        ```<img 
                src={SearchIcon} 
                alt='search' 
                onClick={() => searchMovie(searchTerm) }
                />
        </div>

        {
        
            (movies?.length > 0)
            ? 
            <div className='container'>
            {
                movies.map((movie )=> (
                    <MovieCard movie ={movie} />
                ))
            }
            
            
            </div>
            
                   
            
            :(
                <div className='empty'>
                    <h2>Movies Not found</h2>
                </div>
            )
                    
           } 
           
         
        
            
        
        
              
    </div>
);

}

export default App;