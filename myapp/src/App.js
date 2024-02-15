import React, { Component } from 'react';
import NavBar from './NavBar';
import "bootstrap/dist/css/bootstrap.css";
import Customers from './Customers';
import ProductsList from './ProductsList';


class App extends Component {
  render() {
    return (
      <div>
       <NavBar></NavBar>
       {/* <Customers></Customers> */}
       <ProductsList></ProductsList>
      </div>
    );
  }
}

export default App;  