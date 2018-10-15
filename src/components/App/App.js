import React, { Component } from 'react';
import Create from '../Create/Create'
import Home from '../Home/Home'
import Show from '../Show/Show'
import './App.css';
import { Route, Redirect, Link, Switch } from 'react-router-dom'

class App extends Component {

constructor (props) {
  super(props)
  this.state = {
    birds: this.props.birds
  }
  this.addBird = this.addBird.bind(this)
}

// componentDidMount () {
//   return (
//     <Route
//           path='/home'
//           render={props => <Home {...props} {...this.state} /> }
//           />
//   )
//    // return <Redirect to='/home' />
// }

addBird (newBird) {
  let birds1 = this.state.birds
  this.setState({
    birds: birds1.concat(newBird)
  })
}

  render() {
    return (
      <div>
      <Link to={"/home"}><h1 className='app'>Audubon Society</h1></Link>
      <main>
        <Switch>
          <Route
          path='/home/'
          render={props => <Home {...props} {...this.state} /> }
          />
          <Route
          path='/create/'
          render={props => <Create {...props} {...this.state} addBird={this.addBird}/> }
          />
          <Route
          path='/show/:name'
          render={props => <Show {...props} {...this.state} /> }
          />
                    <Route
          path='/'
          render={props => <Home {...props} {...this.state} /> }
          />
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;
