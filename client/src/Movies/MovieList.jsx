import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MovieCard from './MovieCard';

import '../index.css';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect( () => {
    const getMovies = () => {
      // api call to get the list of movies
      axios
        .get('http://localhost:5000/api/movies')
        .then( response => {
          // set movies array to the get request response's data array
          setMovies( response.data );
        })
        .catch(error => {
          console.error( 'Server Error', error );
        });
    }

    getMovies();
  }, []);

  // return the MovieList component
  return (
    <div className="movie-list">
      {/* map over the movies array creating a link
          wrapped MovieCard component for each item */}
      {movies.map( movie => (
        <Link className="link" key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} type='list' /></Link>
      ))}
    </div>
  );
}

export default MovieList;
