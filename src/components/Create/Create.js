import React, { Component } from 'react'
import './Create.css';

class Create extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bird: {
        name: '',
        genus: '',
        image: '',
        homepage: '',
        conservationStatus: ''
      }
    }
    this.submit = this.submit.bind(this)
    this.change = this.change.bind(this)
  }

  change (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit (event) {
    event.preventDefault()
    this.props.addBird(this.state)
    this.props.history.push('/home')
  }

  render () {
      return (
        <div className='createDiv'>
          <form onChange={this.change}>
          <h1 className='createh1'>Add a New Bird</h1>
            <h3 className='createh3'><label>Name</label></h3>
            <input className='createInput' name='name' type='text'></input>
            <h3 className='createh3'><label>Genus</label></h3>
            <input className='createInput' name='genus' type='text'></input>
            <h3 className='createh3'><label>Image</label></h3>
            <input className='createInput' name='image' type='text'></input>
            <h3 className='createh3'><label>Homepage</label></h3>
            <input className='createInput' name='homepage' type='text'></input>
            <h3 className='createh3'><label>Conservation Status</label></h3>
            <input className='createConservationStatus' name='conservationStatus' type='text'></input>
            <h3 className='createh3'><button className='showButton' onClick={this.submit}>Submit</button></h3>
          </form>
        </div>
      )
    }
  }


export default Create