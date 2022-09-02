import React from 'react'
import './Trailer.css'
import { Link } from 'react-router-dom'
import loadingGif from "../images/loading.gif"

class Trailer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            trailer: null,
            id: this.props.movieID,
            movies: null,
            currentMovie: null
        }
    }

    componentDidMount = () => {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => {
        if (!response.ok) {
            throw Error('Restuffing Burrito... sorry about that.')
        } else {
            return response.json()
        }
        })
        .then(data => {
           let theeMovie = data.movies.find(movie => movie.id === parseInt(this.state.id))
        this.setState({ movies: data.movies,
        currentMovie: theeMovie})
        })
        .catch(error => {
        this.setState({ error: true, errorMessage: error.message })
        })
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}/videos`)
        .then(response => response.json())
        .then(data => {
            this.setState({ trailer: data.videos[1].key })
        })
        }
    

    render() {
        return (
            (this.state.trailer && this.state.movies && this.state.currentMovie) ? (
                <div className="trailer-wrapper" style={{
                    backgroundImage: `url(${this.state.currentMovie.backdrop_path})`
                }}>
                <div className="trailer-container">
                <iframe
                  src={`https://www.youtube.com/embed/${this.state.trailer}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />{" "}
              <div className='button-container'>
              <Link to="/">
                  <button className="home-button">RETURN TO ALL MOVIES</button>
              </Link>
              <Link to={`/${this.state.id}`} replace>
                  <button className="movie-details-button">RETURN TO MOVIE DETAILS</button>
              </Link>
              </div>
              </div>
              </div>
            ) : 
            <div className="loading">
            <h1>Loading...</h1>
            </div>
        )
    }
}

export default Trailer