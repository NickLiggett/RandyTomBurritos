import React from "react"
import "./App.css"
import Header from "../Header/Header"
import MainSection from "../MainSection/MainSection"
import Footer from "../Footer/Footer"
import MovieDetails from "../MovieDetails/MovieDetails"
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: null,
      error: false,
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    this.fetchMovies()
  }

  // handleClick = (id) => {
  //   console.log('HANDLE CLICK REACHED')
  //   const filteredMovie = this.state.movies.filter(movie => movie.id === id)
  //   this.setState({ movies: filteredMovie, error: false, errorMessage: ''  })
  // }

  viewAll = () => {
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        throw Error('Restuffing Burrito... sorry about that.')
      } else {
        return response.json()
      }
    })
    .then(data => {
      this.setState({ movies: data.movies, error: false, errorMessage: '', currentMovie: null })
    })
    .catch(error => {
      this.setState({ movies: [], error: true, errorMessage: error.message, currentMovie: null })
    })
  }

  render() {
    return (
      <div className="main">
        <Header />
          <Route exact path="/" render={() => <MainSection movies={this.state.movies} />}/>
          <Route exact path="/:id" render={({ match }) => <MovieDetails movieID={match.params.id} />}/>
        <Footer />
      </div>
  )
 }
}

export default App