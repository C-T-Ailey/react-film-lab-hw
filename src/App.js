import React, { Component } from 'react'
import './App.css'
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import TMDB from './TMDB'
import axios from "axios"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  
    this.state = {
       films: TMDB.films,
       faves: [],
       current: {}
    }
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice()
    const filmIndex = this.state.faves.indexOf(film)
    if (faves.includes(film)){
      faves.splice(filmIndex, 1)
      console.log(`Removing ${film.title} from faves...`)
      this.setState({faves})
    } else {
      faves.push(film)
      console.log(`Adding ${film.title} to faves...`)
      this.setState({faves})
    }
  }

  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios({
      method: 'GET',
      url: url
    })
    .then(response => {
      console.log(response)
      console.log(`Fetching details for ${film.title}`)
      this.setState({current: response.data})
    })
  }


  render() {

    // const films = TMDB.films.map(film => film)

    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} handleDetailsClick={this.handleDetailsClick}/>
        <FilmDetails film={this.state.current}/>
      </div>
    )
  }
}

