import React from 'react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  // type used as class for css styling
  const type = props.type;

  // return the MovieCard component
  return (
    <div className={`movie-card ${type}`}>
      <h2>{title}</h2>

      <div className="movie-director">
        Director: <em>{director}</em></div>

      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong></div>

      <h3>Actors</h3>

      <ul>
      {/* map over the stars creating list items for each */}
      {stars.map( star => (
        <li key={star} className="movie-star">
          {star}</li>
      ))}
      </ul>
    </div>
  );
};

export default MovieCard;
