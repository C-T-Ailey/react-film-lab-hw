import React, { Component } from 'react'
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import TMDB from './TMDB'

export default class App extends Component {
  render() {

    const films = TMDB.films.map(film => film)

    return (
      <div className="film-library">
        <FilmListing films={films}/>
        <FilmDetails films={films}/>
      </div>
    )
  }
}

