import React from "react"
import "./MovieCard.css"
import { NavLink } from "react-router-dom"



const MovieCard = (props) => {   // <---- only pass poster and ID
    return (
        <NavLink to={`${props.id}`}>
        <div className="movie-card" 
            id={props.id}
            style={{
            backgroundImage: `url(${props.posterPath})`, 
            backgroundPosition: "center", 
            backgroundSize: "cover"}}
            onClick={() => props.fetchSingleMovie(props.id)}
        >
        </div>
        </NavLink>
    )
}

export default MovieCard