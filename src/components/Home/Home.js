import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    let list = this.props.birds.map(item => {
      return (
        <div key={item.name}>
          <p>
            <Link to={"/show/" + item.name}><img src={item.image} alt={item.name} /></Link>
          </p>
        </div>
      );
    });
    return (
      <div className='homeDiv'>
        <section className='homeSection'>
        <h2 className='homeh2'>Birds</h2>
        <nav>
          <Link to="/create"><a>(Add a new bird)</a></Link>
        </nav>
        </section>
        <container className='homeContainer'>
        {list}
        </container>
      </div>
    );
  }
}

export default Home;
