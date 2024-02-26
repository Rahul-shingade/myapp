import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        title: 'Products List',
        products: [],
    };
};
    render() {
        return (
            <div>
                <h2>Product list</h2>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return (
                            <Product key={prod.id} product={prod} onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                                <button type="button" className='btn btn-success'>Buy Now</button>
                            </Product>
                        )
                    })}
                </div></div>
        );
    }
    componentDidMount(){
        var promise = fetch ("http://localhost:5000/product",{method: "GET"});
        promise.then((response) =>{
            console.log(response);

            var promise2 = response.json();
            promise2.then((cours) => {
                console.log(cours);
                this.setState({products: cours});
            })
        })
        console.log("working ")
    }
    handleIncrement = (product, maxValue) => {
        var totProduct = [...this.state.products];
        var index = totProduct.indexOf(product);
        if (totProduct[index].quantity < maxValue) {
            totProduct[index].quantity++;
            this.setState({ products: totProduct });
        }
    }
    handleDecrement = (product, minValue) => {
        var totProduct = [...this.state.products];
        var index = totProduct.indexOf(product);
        if (totProduct[index].quantity > minValue) {
            totProduct[index].quantity--;
            this.setState({ products: totProduct });
        }
    }
    handleDelete = (product) => {
        let totProducts = [...this.state.products];
        let index = totProducts.indexOf(product);
        if (window.confirm("are you sure to delete ")) {
            totProducts.splice(index, 1);
            this.setState({ products: totProducts });
        }
    }
}

export default ProductsList;