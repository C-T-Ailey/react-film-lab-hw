import React from 'react'

export default function Fave(props) {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//         isFave: false
//     }
//   }

  const handleClick = (e) => {
    props.onFaveToggle()
    e.stopPropagation()
  }


  const faveClassCheck = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'
    // console.log(this.props.isFave)
  return (
    //   <div className='film-row-fave' onClick={this.handleClick}>
    <div className={faveClassCheck + " film-row-fave"} onClick={handleClick}>
      <p className='material-icons'>{faveClassCheck}</p>
    </div>
  )
}

