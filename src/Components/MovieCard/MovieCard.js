import React from "react"
import "./MovieCard.css"
import { Link } from "react-router-dom"



const MovieCard = (props) => {   // <---- only pass poster and ID
    return (
        <Link to={`${props.id}`}>
        <div className="movie-card" 
            id={props.id}
            style={{
            backgroundImage: `url(${props.posterPath})`, 
            backgroundPosition: "center", 
            backgroundSize: "cover"}}
        >
        </div>
        </Link>
    )
}

export default MovieCard