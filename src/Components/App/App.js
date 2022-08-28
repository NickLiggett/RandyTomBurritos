import React from "react"
import "./App.css"
import Header from "../Header/Header"
import MainSection from "../MainSection/MainSection"
import Footer from "../Footer/Footer"
import MovieDetails from "../MovieDetails/MovieDetails"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: false,
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    this.fetchMovies()
  }

  handleClick = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({ movies: filteredMovie, error: false, errorMessage: ''  })
  }

  viewAll = () => {
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw Error('Restuffing Burrito... sorry about that.')
      } else {
        return response.json()
      }
    })
    .then(data => {
      console.log(data)
      this.setState({ movies: data.movies, error: false, errorMessage: ''  })
    })
    .catch(error => {
      this.setState({ movies: [], error: true, errorMessage: error.message })
    })
  }

  render() {
    return (
      <div className="main">
        <Header />
        {this.state.error && <h1 className="error-message">{this.state.errorMessage}</h1>}
        {this.state.movies.length === 1 ? <MovieDetails movie={this.state.movies} viewAll={this.viewAll}/> : <MainSection movies={this.state.movies} handleClick={this.handleClick} />}
        <Footer />
      </div>
  )
 }
}

export default App