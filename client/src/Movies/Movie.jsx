import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  const movieUrl = `http://localhost:5000/api${ props.match.url }`;

  useEffect(() => {  
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    axios
      .get( movieUrl )
      .then( response => {
        setMovie( response.data );
      })
      .catch( error => {
        console.error( error );
      });

  }, [ movieUrl ] );

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList( movie );
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} type='single' />
      <div className='save-button' onClick={saveMovie}>Save</div>
    </div>
  );
}

export default Movie;
