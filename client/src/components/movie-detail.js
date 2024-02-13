import movies from './dummy-data';

const MovieDetail = () => {
  return(
    <div>
      {movies.map((movie, index) => (
        <div key={index}className="movieContainer">
          <h1>{movie.title}</h1>
        </div>
        ))}
    </div>
  )
}

export default MovieDetail;