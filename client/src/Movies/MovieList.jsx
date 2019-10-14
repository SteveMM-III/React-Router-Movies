import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MovieCard from './MovieCard';

import '../index.css';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect( () => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then( response => {
          setMovies( response.data );
        })
        .catch(error => {
          console.error( 'Server Error', error );
        });
    }

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map( movie => (
        <Link className="link" key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} type='list' />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
