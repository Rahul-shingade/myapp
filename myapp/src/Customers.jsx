import React, { Component } from 'react';

class Customers extends Component {
    state = {
        pageTitle : "Customer Data"
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
            </div>
        );
    }
}

export default Customers;