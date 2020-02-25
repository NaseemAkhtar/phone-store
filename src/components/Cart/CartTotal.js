import React from 'react'
import {Link} from 'react-router-dom'

export default function CartTotal({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value
    return (
        <React.Fragment>
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                    <button type="button" className="btn btn-danger" onClick={() => clearCart()}>Clear Cart</button>
                </Link>
                <h5>Sub Total: <strong>${cartSubTotal}</strong></h5>
                <h5>Tax: <strong>${cartTax}</strong></h5>
                <h5>Total: <strong>${cartTotal}</strong></h5>
            </div>
        </React.Fragment>
    )
}
