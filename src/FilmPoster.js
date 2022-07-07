import React, { Component } from 'react'

export default class FilmPoster extends Component {
  render() {
    return (
      <img src={this.props.posterUrl} alt=""/>
    )
  }
}
