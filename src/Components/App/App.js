import React from "react"
import "./App.css"
import Header from "../Header/Header"
import MainSection from "../MainSection/MainSection"
import Footer from "../Footer/Footer"
import movieData from "../../movie-data"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  handleClick = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({ movies: filteredMovie})
  }
  render() {
    return (
      <div className="main">
        <Header />
        <MainSection movies={this.state.movies} handleClick={this.handleClick} />
        {this.state.movies.length === 1 ? <p className="details">{this.state.movies[0].title} Tastiness Rating: {this.state.movies[0].average_rating.toFixed(2)} {this.state.movies[0].release_date}</p> : <p></p>}
        <Footer />
      </div>
  )
 }
}

export default App