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
  render() {
    return (
      <div className="main">
        <Header />
        <MainSection movies={this.state.movies} />
        <Footer />
      </div>
  )
 }
}

export default App