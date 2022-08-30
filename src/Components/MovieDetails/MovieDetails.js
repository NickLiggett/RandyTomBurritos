import React from "react"
import "./MovieDetails.css"

const MovieDetails = ({ movie, viewAll, match }) => {
    console.log("match test ", match.params.id)
    // fetchSingleMovie(match.params.id)
    console.log(movie)
    return (
        <div className="details-wrapper" style={{
            backgroundImage: `url(${movie.backdrop_path})`,
            // opacity: .5
            }}>
            <img className="poster" alt="movie-poster" src={movie.poster_path}/>
            <div className="details">
                <h2>{movie.title.toUpperCase()}</h2>
                <p>
                    RANDY TOM'S TASTINESS RATING: {movie.average_rating.toFixed(2)} 
                </p> 
                <p>
                    RELEASE DATE: {movie.release_date}
                </p>
                <button className="view-all-button" onClick={viewAll}>RETURN TO ALL MOVIES</button>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default MovieDetails