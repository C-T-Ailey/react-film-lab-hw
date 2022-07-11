import React, { Component } from "react";
import FilmFilter from "./FilmListingFilter";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       filter: FilmFilter.favFilter
    }
  }

  handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}`)
    this.setState({
        filter: filter
    })
  }

  render() {
    // const allFilms = this.props.films.map( (film, id, title, poster_path, release_date) => ( 
    //     <FilmRow film = {film} key = {id} title = {title} poster_path = {poster_path} release_date = {release_date} />
    //  ))
    const allFilter = (this.state.filter === 'all') ? 'film-list-filter is-active' : 'film-list-filter'
    const faveFilter = (this.state.filter === 'faves') ? 'film-list-filter is-active' : 'film-list-filter'
    
    const allFilms = this.props.films.map((film) => {
        return (
        <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        handleDetailsClick={() => this.props.handleDetailsClick(film)}
        isFave= {this.props.faves.includes(film)}
        />
        )
      })

    const faveFilms = this.props.faves.map((film) => {
        return (
        <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        handleDetailsClick={() => this.props.handleDetailsClick(film)}
        isFave= {this.props.faves.includes(film)}
        />
        )
    });

    if (this.state.filter==='all'){
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
                    <span className="section-count">{this.props.faves.length}</span>
                </div>
            </div>
            {allFilms}
        </div>
        );
    } else {
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
                    <span className="section-count">{this.props.faves.length}</span>
                </div>
            </div>
            {faveFilms}
        </div>
        );
    }

  }
}
