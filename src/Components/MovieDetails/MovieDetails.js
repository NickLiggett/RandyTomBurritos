import React from "react"
import "./MovieDetails.css"

const MovieDetails = ({ movie, viewAll }) => {

    return (
        <div className="details-wrapper" style={{
            backgroundImage: `url(${movie[0].backdrop_path})`,
            // opacity: .5
            }}>
            <img className="poster" alt="movie-poster" src={movie[0].poster_path}/>
            <div className="details">
                <h2>{movie[0].title.toUpperCase()}</h2>
                <p>
                    RANDY TOM'S TASTINESS RATING: {movie[0].average_rating.toFixed(2)} 
                </p> 
                <p>
                    RELEASE DATE: {movie[0].release_date}
                </p>
                <button className="view-all-button" onClick={viewAll}>RETURN TO ALL MOVIES</button>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default MovieDetails