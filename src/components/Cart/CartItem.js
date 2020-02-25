import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../../context'

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item
    const {increment, decrement, removeItem} = value
    return (
        <div className="row my-1 d-flex text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img className="img-fluid" src={img} style={{height: "70px"}} alt="title" />
            </div>
            <div className="col-10 mx-auto col-lg-2">{title}</div>
            <div className="col-10 mx-auto col-lg-2">${price}</div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-outline-dark mx-1" onClick={() => decrement(id)}
                            
                        >-</span>
                        <span className="btn btn-outline-dark mx-1">{count}</span>
                        <span className="btn btn-outline-dark mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="btn btn-outline-danger" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </span>
            </div>
            <div className="col-10 mx-auto col-lg-2">${total}</div>
        </div>
    )
}

const CartBox = styled.div`
    text-align: center;
    h5{
        font-size: 14px;
    }
    .item-img {
        max-width: 100%;
        max-height: 70px;
    }
`