import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Default extends Component {
    render() {
        return (
            <div className="container text-center">
                <br></br>
                <h1>404</h1>
                <h3>Page not found</h3>
                <h4>Your requested url<span className="text-danger">{this.props.location.pathname}</span> was not found</h4>
                <br></br>
                <Link to="/" className="btn btn-outline-success">Go To Home Page</Link>
            </div>
        )
    }
}
