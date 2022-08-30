import React from "react"
import "./MainSection.css"
import MovieCard from "../MovieCard/MovieCard"


const Movies = ( {movies, fetchSingleMovie} ) => {
    const movieList = movies.map(movie => {
       return <MovieCard 
          id={movie.id} 
          posterPath={movie.poster_path}
          backdropPath={movie.backdrop_path}
          title={movie.title}
          averageRating={movie.average_rating}
          releaseDate={movie.release_date}
          key={movie.id}
          fetchSingleMovie={fetchSingleMovie}
        />
    })
    return (
        <div className="all-movies">
            {movieList}
        </div>
    )
}

export default Movies