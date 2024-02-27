import React, { Component } from 'react';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import NavBar from './NavBar';
import "bootstrap/dist/css/bootstrap.css";
import Customers from './Customers';
import ProductsList from './ProductsList';
import 'font-awesome/css/font-awesome.css';
import Login from './Login';
import Register from './Register';
import Nomatchpage from './Nomatchpage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path ="/" exact element = { < Login />} />
          <Route path ="/register" exact element = { <Register/>} />
          <Route path ="/card" exact element = { < ProductsList />} />
          <Route path ="/cust" exact element = { < Customers />} />
          <Route path ="*" exact element = { < Nomatchpage/>} />
          
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;  