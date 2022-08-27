import React from "react"
import "./MainSection.css"
import MovieCard from "../MovieCard/MovieCard"

const Movies = ( {movies, handleClick} ) => {

    const movieList = movies.map(movie => {
       return <MovieCard 
          id={movie.id} 
          posterPath={movie.poster_path}
          backdropPath={movie.backdrop_path}
          title={movie.title}
          averageRating={movie.average_rating}
          releaseDate={movie.release_date}
          key={movie.id}
          handleClick={handleClick}
        />
    })
    return (
        <div className="all-movies">
            {movieList}
        </div>
    )
}

export default Movies