import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = ( movie ) => {
    // add incoming movie object to the savedList array
    setSavedList( [...savedList, movie] );
  };

  // return the page layout
  return (
    <div>
      {/* saved movies list as a pseudo header */}
      <SavedList list={savedList} />
      {/* set route for home/root page, get rendered by default*/}
      <Route exact path='/' component={MovieList} />
      {/* set route for individual movies based on id, rendered when clicked */}
      <Route exact path='/movies/:movieId' render={ ( props ) =>
        <Movie { ...props } addToSavedList={addToSavedList} /> } />
    </div>
  );
};

export default App;
