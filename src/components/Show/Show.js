import React, { Component } from 'react'
import './Show.css';

class Show extends Component {

  render () {

    let showBird = this.props.birds.filter(bird =>
      bird.name === this.props.match.params.name)[0]
      console.log(showBird)

    return (
      <div className='showDiv'>
        <img className='showImg' src={showBird.image} alt={showBird.name}></img>
        <container>
        <h1 className='showh1'>{showBird.name}</h1>
        <p className='showp1'>({showBird.genus})</p>
        <h4>Conservation Status</h4>
        <p className='showp2'>{showBird.conservationStatus}</p>
        <form action={showBird.homepage}>
        <input className='showButton' type='submit' value='Read More' />
        </form>
        </container>
      </div>
    )
  }
}

export default Show