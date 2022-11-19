import React from "react"
import "./MovieCard.css"
import { Link } from "react-router-dom"



const MovieCard = ({ id, posterPath }) => {
    return (
        <Link to={`/RandyTomBurritos/${id}`} className="link">
        <div className="movie-card" 
            id={id}
            style={{
            backgroundImage: `url(${posterPath})`, 
            backgroundPosition: "center", 
            backgroundSize: "cover"}}>
        </div>
        </Link>
    )
}

export default MovieCard