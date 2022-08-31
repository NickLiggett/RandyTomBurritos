import React from "react"
import "./MovieDetails.css"
import randyTom from "../images/randy-tom.png"
import { Link } from 'react-router-dom'

class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: null,
            id: this.props.movieID
        }
    }

    componentDidMount = () => {
            fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.movie)
              this.setState({
                  movie: data.movie,
                  id: data.movie.id
              })
            })
          }
    

    render(){
        const movie = this.state.movie
        console.log(movie)
        return (this.state.movie) ?  (
            <div className="details-wrapper" style={{
                backgroundImage: `url(${movie.backdrop_path})`
            }}>
            <img className="poster" alt="movie-poster" src={movie.poster_path}/>
            <div className="details">
                <h2>{movie.title.toUpperCase()}</h2>
                <h3>
                    {movie.tagline}
                </h3>
                <p>
                    {movie.overview}
                    <br></br>
                    <img className="randy-tom" src={randyTom} alt="randy tom logo"/>
                    <br></br>
                    RANDY TOM'S TASTINESS RATING: 🌯 {movie.average_rating.toFixed(2)} 🌯  
                    <br></br>
                    RELEASE DATE: {movie.release_date}
                    <br></br>
                    RUNTIME: {movie.runtime} minutes
                </p>
                <Link to="/">
                <button className="view-all-button">RETURN TO ALL MOVIES</button>
                </Link>
            </div>
            <div>
            </div>
        </div>
    ) : <p>Loading...</p>
}
}

export default MovieDetails