import React, { Component } from "react";
import Fave from "./Fave";
import FilmPoster from "./FilmPoster";

export default class FilmRow extends Component {

  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
  }

  render() {
    let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
    let fullDate = new Date(this.props.film.release_date)
    let year = fullDate.getFullYear()

    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
        <FilmPoster posterUrl = {posterUrl} />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave />
      </div>
    );
  }
}