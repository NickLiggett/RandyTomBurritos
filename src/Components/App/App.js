import React from "react"
import "./App.css"
import Header from "../Header/Header"
import MainSection from "../MainSection/MainSection"
import Footer from "../Footer/Footer"
import MovieDetails from "../MovieDetails/MovieDetails"
import { Route } from 'react-router-dom';

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
      this.setState({ movies: data.movies })
    })
    .catch(error => {
      this.setState({ error: true, errorMessage: error.message })
    })
  }

  render() {
    return (
      <div className="main">
        <Header />
          {(this.state.error && <h1 className="error-message">{this.state.errorMessage}</h1>)}
          <Route exact path="/" render={() => <MainSection movies={this.state.movies} />}/>
          <Route exact path="/:id" render={({ match }) => <MovieDetails movieID={match.params.id} />}/>
        <Footer />
      </div>
  )
 }
}

export default App