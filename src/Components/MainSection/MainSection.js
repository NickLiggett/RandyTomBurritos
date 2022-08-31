import React from "react"
import "./MainSection.css"
import MovieCard from "../MovieCard/MovieCard"


const Movies = ( { movies } ) => {
    const movieList = movies.map(movie => {
       return <MovieCard 
            key={movie.id}
            id={movie.id} 
            posterPath={movie.poster_path}/>
    })
    return (
            <div className="all-movies">
                {movieList}
            </div>
    )
}

export default Movies