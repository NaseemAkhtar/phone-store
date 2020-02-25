import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer } from '../../context'
import CartColumns from './CartColumns'
import Emptycart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Your Cart</h3>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                    <CartColumns/>
                                    <CartList value={value} /> 
                                    <CartTotal value={value}/>
                                </React.Fragment>
                            )
                        } else {
                            return <Emptycart/>
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}


const Heading = styled.h3`
    color: #999;
    font-size: 22px;
    &:hover{color: #000}
`

const CartContainer = styled.div`

`