import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       filter: 'all'
    }
  }

  handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}`)
    this.setState({
        filter: filter
    })
  }

  render() {
    const allFilms = this.props.films.map( (film, id, title, poster_path, release_date) => ( 
        <FilmRow film = {film} key = {id} title = {title} poster_path = {poster_path} release_date = {release_date} />
     ))

    const allFilter = (this.state.filter === 'all') ? 'film-list-filter is-active' : 'film-list-filter'
    const faveFilter = (this.state.filter === 'faves') ? 'film-list-filter is-active' : 'film-list-filter'
    
    return (
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
            <div className={allFilter} onClick={() => this.handleFilterClick('all')}>
                ALL
                <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className={faveFilter} onClick={() => this.handleFilterClick('faves')}>
                FAVES
                <span className="section-count">0</span>
            </div>
        </div>
    
        {allFilms}
    </div>
    );
  }
}
