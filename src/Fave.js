import React, { Component } from 'react'

export default class Fave extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isFave: false
    }
  }

  handleClick = (e) => {
      this.setState({
          
        isFave: !this.state.isFave
          
      })
      e.stopPropagation()
  }

  render() {
    const faveClassCheck = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
    console.log(this.state.isFave)
    return (
    //   <div className='film-row-fave' onClick={this.handleClick}>
      <div className={faveClassCheck + " film-row-fave"} onClick={this.handleClick}>
        <p className='material-icons'>{faveClassCheck}</p>
      </div>
    )
  }
}
