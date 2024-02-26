import React, { Component } from 'react';

class Product extends Component {
    state = {
        product : this.props.product
    }
    render() {
        return (
            // <div>
            //     <h5>Product componrnts</h5>
            //     {this.props.product.id}
            // </div>
            <div classNameName="card" style={{ "width": "18rem" }}>
                <img src={this.props.product.img} className="card-img-top" alt=".../" />
                <span className='pull-right hand-icon' onClick={()=>{
                    this.props.onDelete(this.state.product);
                }}>
                    <i class="fa fa-times"></i>
                </span>
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.pname}</h5>
                    <p className="card-text">Lorem
                       , veritatis a neque quod placeat commodi!</p>
                    <div>{this.props.product.price}</div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button
                            type="button"
                            class="btn btn-primary" 
                            onClick={()=>{
                                console.log("click this");
                                this.props.onIncrement(this.state.product,5)
                            }}>
                            +
                        </button>
                        <button type="button" class="btn btn-primary">{this.props.product.quantity}</button>
                        <button type="button" class="btn btn-primary"
                            onClick={()=>{
                                console.log("click me");
                                this.props.onDecrement(this.state.product,0)
                            }}
                        >-</button>
                    </div>
                    <div style={{ "alignContent": "right" }}>
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;