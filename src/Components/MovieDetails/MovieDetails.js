import React from "react"
import "./MovieDetails.css"

const MovieDetails = ({ movie, viewAll }) => {
    console.log(movie[0].title)
    return (
        <div className="details-wrapper" style={{backgroundImage: `url(${movie[0].backdrop_path})`}}>
            <img className="poster" alt="movie-poster" src={movie[0].poster_path}/>
            <div className="details">
                <h2>{movie[0].title}</h2>
                <p>Tastiness Rating: {movie[0].average_rating.toFixed(2)}</p>
                <p>{movie[0].release_date}</p>
                <button className="view-all-button" onClick={viewAll}>View All Movies</button>
            </div>
        </div>
    )
}

export default MovieDetails