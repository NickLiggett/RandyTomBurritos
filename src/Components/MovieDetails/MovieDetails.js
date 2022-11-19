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
            .then(data => this.setState({ movie: data.movie }))
          }
    
    render() {
        const movie = this.state.movie
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
                    {/* {const dateOfMovie = new Date(movie.release_date)
                    console.log(dateOfMovie)} */}
                    RELEASE DATE: {movie.release_date}
                    <br></br>
                    RUNTIME: {movie.runtime} minutes
                    <br></br>
                   {movie.revenue > 0 && <p className="rev-and-budget">
                    REVENUE: {movie.revenue.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        })}
                    </p>}
                    {movie.budget > 0 && <p className="rev-and-budget">
                    BUDGET: {movie.budget.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        })}
                     </p>}
                </p>
                <h3>
                    GENRES:
                    <br></br>
                    {movie.genres.join(' · ')}
                </h3>
                <div className='button-container'>
                <Link to="/RandyTomBurritos/">
                    <button className="home-button">RETURN TO ALL MOVIES</button>
                </Link>
                <Link to={`/RandyTomBurritos/${movie.id}/videos`} replace>
                    <button className="trailer-button">VIEW TRAILER</button>
                </Link>
                </div>
            </div>
            <div>
            </div>
        </div>
    ) : 
    <div className="loading">
        <h1>Loading...</h1>
    </div>
}
}

export default MovieDetails