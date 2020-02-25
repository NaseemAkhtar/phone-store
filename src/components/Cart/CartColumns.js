import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Products</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Name of Product</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Price</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">Products</div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Remove</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>Total</p>
                </div>
            </div>
            
        )
    }
}