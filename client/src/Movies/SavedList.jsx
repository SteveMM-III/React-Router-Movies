import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>

    {/* map over the list array and create NavLinks for each movie */}
    {props.list.map( movie => (
      <NavLink key={movie.id} to={`/movies/${movie.id}` } activeClassName='saved-active' >
        <span className="saved-movie">{movie.title}</span></NavLink>
    ))}

    <Link to='/'>
      <button className="home-button">Home</button></Link>
  </div>
);

export default SavedList;
