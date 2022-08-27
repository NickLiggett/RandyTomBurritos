import React from "react"
import "./App.css"
import Header from "../Header/Header"
import MainSection from "../MainSection/MainSection"
import Footer from "../Footer/Footer"
import movieData from "../../movie-data"
import MovieDetails from "../MovieDetails/MovieDetails"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  handleClick = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({ movies: filteredMovie })
  }

  viewAll = () => {
    this.setState({ movies: movieData.movies })
  }

  render() {
    return (
      <div className="main">
        <Header />
        {this.state.movies.length === 1 ? <MovieDetails movie={this.state.movies} viewAll={this.viewAll}/> : <MainSection movies={this.state.movies} handleClick={this.handleClick} />}
        <Footer />
      </div>
  )
 }
}

export default App