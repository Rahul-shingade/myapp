import React, { Component } from 'react';
import NavBar from './NavBar';
import "bootstrap/dist/css/bootstrap.css";
import Customers from './Customers';


class App extends Component {
  render() {
    return (
      <div>
       <NavBar></NavBar>
       <Customers></Customers>
      </div>
    );
  }
}

export default App;