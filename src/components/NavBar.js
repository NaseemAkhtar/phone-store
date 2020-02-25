import React, { Component } from 'react'
import logo from '../logo.svg';
import  {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <Link className="logo" to="/"><img src={logo} alt="" /> Mobile Store</Link>
                    <Link className="cart" to="/cart"><i className="fas fa-cart-arrow-down"></i> My Cart</Link>
                </div>
            </header>
        )
    }
}
