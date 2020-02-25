import React, { Component } from 'react'
import {ProductConsumer } from '../context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, title, img, price, company, info, inCart} = value.detailProduct
                    return(
                        <ProductBox className="container py-5">
                            <div className="row">
                                <div className="col-3 mx-auto">
                                    <div className="imgBox"><img src={img} alt=""/></div>
                                </div>

                                <div className="col-9">
                                    <div className="detail">
                                        <h1>{title}</h1>
                                        <h5>Made by {company}</h5>
                                        <p>Price: ${price}</p>
                                        <div className="info">{info}</div>
                                        <div className="btnGroup">
                                            <Link to="/"><i className="fas fa-angle-left"></i> Back To Products</Link>
                                            <Button className="addTocartBtn"
                                            cart={inCart ? true : false}
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }}>
                                                <i className="fas fa-cart-arrow-down"></i> 
                                                {inCart ? ' Added' : ' Add To cart'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ProductBox>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const Button = styled.button`
    display: inline-block;
    padding: 6px 10px;
    border: 1px solid #28a745;
    background: ${props => props.cart ? 'var(--btnGreen)' : 'transparent'};
    color: ${props => props.cart ? '#ffffff' : 'var(--btnGreen)' };
    border-radius: 4px;
    margin-right: 7px;
    &:hover{
        border: 1px solid var(--btnGreen);
        background: var(--btnGreen);
        color: #fff;
    }
`

const ProductBox = styled.div`
    h1{
        font-size: 26px;
    }
    h5 {
        color: #666;
        font-weight: 300
    }
    .imgBox{
        float: left;
        max-width: 350px;
    }
    .imgBox img {
        max-width: 100%
    }
    .detail{
        float: left
    }
    .btnGroup {
        margin-top: 30px;
        a{
            display: inline-block;
            padding: 6px 10px;
            border: 1px solid var(--lightBlue);
            background: transparent;
            color: #007bff;
            border-radius: 4px;
            margin-right: 7px;
            &:hover{
                border: 1px solid var(--lightBlue);
                background: var(--lightBlue);
                color: #fff;
                text-decoration: none
            }
        }
    }
`
