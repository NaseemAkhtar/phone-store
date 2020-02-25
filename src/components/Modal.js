import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer } from '../context'
import {Link } from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, closeModel} = value;
                    const {img, title, price} = value.modalProduct
                    if(!modalOpen){
                        return null
                    } else {
                        return(
                            <ModelContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="model" className="col-11 col-sm-6 mx-auto text-center">
                                            <h3>Item added to the cart</h3>
                                            <img className="img-fluid" src={img} alt="" />
                                            <h5 className="title">{title}</h5>
                                            <h5 className="price">Price: ${price}</h5>
                                            <div className="btnGroup">
                                                <Link to="/">
                                                    <button className="continueShoping" onClick={()=> closeModel()}>Continue Shoping</button>
                                                </Link>
                                                <Link to="/cart">
                                                    <button  className="gotoCart"
                                                    onClick={() => closeModel()}>Goto cart <i className="fas fa-angle-right"></i></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModelContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

 const ModelContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    #model{
        background: #fff;
        padding: 15px;
        border-radius: 4px;
    }
    .price{
        color: #666;
    }

    .btnGroup {
        margin-top: 15px;
        .continueShoping {
            display: inline-block;
            padding: 6px 10px;
            border: 1px solid #28a745;
            background: transparent;
            color: var(--btnGreen);
            border-radius: 4px;
            margin-right: 7px;
        }
        .gotoCart{
            display: inline-block;
            padding: 6px 10px;
            border: 1px solid var(--lightBlue);
            background: transparent;
            color: #007bff;
            border-radius: 4px;
            margin-right: 7px;
        }
    }
 `
