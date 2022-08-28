import React from "react"
import "./MovieCard.css"



const MovieCard = (props) => {   // <---- only pass poster and ID

    return (
        <div className="movie-card" 
            // onClick={event => this.handleClick(event)}
            id={props.id}
            style={{
            backgroundImage: `url(${props.posterPath})`, 
            backgroundPosition: "center", 
            backgroundSize: "cover"}}
            onClick={() => props.handleClick(props.id)}
        >
        </div>
    )
}

export default MovieCard