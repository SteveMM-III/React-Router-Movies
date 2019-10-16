import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  // url as a variable for ease of use
  const movieUrl = `http://localhost:5000/api/movies/${ props.match.params.movieId }`;

  useEffect(() => {
    // api call to get the specific movie
    axios
      // movieUrl becomes a dependency
      .get( movieUrl )
      .then( response => {
        // set the movie object to the get request response's data object
        setMovie( response.data );
      })
      .catch( error => {
        console.error( error );
      });
  // add the movieUrl to the dependency array
  }, [ movieUrl ] );

  // function to save the movie to the saved list
  const saveMovie = () => {
    // get the passed down function and add movie to savedList
    const addToSavedList = props.addToSavedList;
    addToSavedList( movie );
  }

  // if movie is not loaded for some reason, inform user
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // return the Movie component
  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} type='single' />
      {/* add the saveMovie function to the onClick event */}
      <button className='save-button' onClick={saveMovie}>Save</button>
    </div>
  );
}

export default Movie;
