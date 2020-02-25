import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
   
    render() {
        return (
            <div className="container">
                <Title title="Products List" />
                <div className="row">
                    <ProductConsumer>
                        { value =>{
                        //console.log(value.products)
                        return value.products.map(item => {
                                return <Product key={item.id} product={item} />
                            })
                        }}
                    </ProductConsumer>
                </div> 
            </div>
        )
    }
}
