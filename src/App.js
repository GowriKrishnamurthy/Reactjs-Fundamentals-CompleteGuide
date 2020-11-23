import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App!</h1>
        
        {/* Using own react component*/}
        <Person /> 
      </div>      

      // JSX is just syntactic sugar for JavaScript, allowing us to write HTMLish code instead of
      // nested React.createElement(...) calls.
      // React.createElement(
      //   'div',
      //   {className:'App'},
      //   React.createElement('h1',null,"Hi, I\'m a React App!"))
    );
  }
}

export default App;
