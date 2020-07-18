import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './Table';
import Chart from './Chart';

class App extends Component {

  state = {
    toggle: true
  }
  toggleHandler = () =>{

    let t = this.state.toggle ? false : true;

    this.setState({toggle: t})
  }
  render(){

    let post = this.state.toggle ? <Table /> : <Chart />;
    return (
      <div className="App">
        <button onClick={this.toggleHandler}>Click</button>
        {post}
      </div>
    );
  } 
}

export default App;
