import React, { useEffect, useState } from 'react';

const MovieDetail = () => {
  const[movies, setMovies] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:8080/movies');
        if(!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchMovies();
    setLoading(false);
  }, []);


  return(
    <div>
      {loading ? <div>Loading movies...</div> :
      <div className="movie-container">
        {movies.map(movie => (
          <div key={movie.id}className="individual-movie">
            <h1>{movie.Title}</h1>
            <section>
              <p>Release Date: {movie.ReleaseDate}</p>
              <p>Rated: {movie.Rated}</p>
              <p>Genre: {movie.Genre}</p>
            </section>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <p>Rating: {movie.Rating}</p>
          </div>
        ))}
      </div>
      }
    </div>
  )
}

export default MovieDetail;