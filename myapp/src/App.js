import React, { Component } from 'react';
import NavBar from './NavBar';
import "bootstrap/dist/css/bootstrap.css";
import Customers from './Customers';
import ProductsList from './ProductsList';
import 'font-awesome/css/font-awesome.css';
import Login from './Login';
import Register from './Register';


class App extends Component {
  render() {
    return (
      <div>
       <NavBar></NavBar>
       {/* <Customers></Customers> */}
       {/* <ProductsList></ProductsList> */}
      {/* <Login></Login> */}
      <Register></Register>
      </div>
    );
  }
}

export default App;  