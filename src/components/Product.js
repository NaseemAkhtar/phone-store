import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
                <div className="item">
                    <ProductConsumer>
                        {value => (
                            <Link to="/Detail" onClick={() => value.handleDetail(id)}><img src={img} className="itemImg" alt={title}/></Link>
                        )}
                    </ProductConsumer>
                    <h3>{title}</h3>
                    <div className="priceBar">
                        ${price}
                        <ProductConsumer>
                            {value => (
                                <button className="cartBtn"
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id)
                                    value.openModal(id)
                                }}>
                                    {inCart ? 'Added ' : '' }
                                    <i className="fas fa-cart-arrow-down"></i>
                                </button>
                            )}
                        </ProductConsumer>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}

const ProductWrapper = styled.div`

`
