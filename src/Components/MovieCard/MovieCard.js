import React from "react"
import "./MovieCard.css"

const MovieCard = (props) => {
    return (
        <div className="movie-card" style={{backgroundImage: `url(${props.posterPath})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            
        </div>
    )
}

export default MovieCard