import React, { Component } from "react";
import Fave from "./Fave";
import FilmPoster from "./FilmPoster";

export default class FilmRow extends Component {

  render() {
    const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
    let fullDate = new Date(this.props.film.release_date)
    let year = fullDate.getFullYear()

    let isReviewed = (<i className="material-icons"></i>)

    if (this.props.film.review) {
      isReviewed = (
      <div className="reviewed">
        <i className="material-icons">comment</i>
      </div>
      )
    }

    return (
      <div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.film)}>
        <FilmPoster posterUrl = {posterUrl} />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
        {isReviewed}
        <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}/>
      </div>
    );
  }
}