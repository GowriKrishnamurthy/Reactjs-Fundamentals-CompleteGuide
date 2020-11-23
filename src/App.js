import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <h1> Hi, I'm a React App!</h1>
      // </div>      
      React.createElement(
        'div',
        {className:'App'},
        React.createElement('h1',null,"Hi, I\'m a React App!"))
    );
  }
}

export default App;
