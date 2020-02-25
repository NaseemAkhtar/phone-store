import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()
//Accept 2 parameter (Provider, Consumer)

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount(){
        this.setProducts()
    }

    setProducts = () => {
        let tempProduct = []
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProduct = [...tempProduct, singleItem]
        })
        //console.log(tempProduct)
        this.setState(() => {
            return {products: tempProduct}
        })
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        const tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        this.setState(() => {
            return {products:tempProducts, cart: [...this.state.cart, product]}
        },() => {
            this.addTotal()
        })
    }

    openModal = id =>{
        const product = this.getItem(id)
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModel = id => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = id => {
        let tempcart = [...this.state.cart]
        const selectedProduct = tempcart.find(item => item.id === id)
        const index = tempcart.indexOf(selectedProduct)
        const product = tempcart[index]
        product.count = product.count + 1
        product.total = product.count * product.price
        this.setState(() => {
            return { cart: [...tempcart] }
        }, () => {
            this.addTotal()
        })
    }

    decrement = id => {
        let tempCart = [...this.state.cart]
        const selectProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectProduct)
        const product = tempCart[index]
        product.count = product.count - 1

        if(product.count === 0){
            this.removeItem(id)
        } else {
            product.total = product.count * product.price
            this.setState(() => {
                return{ cart: [...tempCart] }
            }, () => {
                this.addTotal()
            })
        }
    }

    removeItem = id => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id))
        let removeProduct = tempProducts[index]
        removeProduct.inCart = false
        removeProduct.count = 0
        removeProduct.total = 0
        this.setState(() => {
            return{
                cart:[...tempCart],
                products: [...tempProducts],
            }
        }, () => {
            this.addTotal()
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {cart: []}
        }, () =>{
            this.setProducts()
            this.addTotal()
        })
    }

    addTotal = () => {
        let subTotal = 0
        this.state.cart.map(item => subTotal += item.total)
        const tempTax = (subTotal * 12) / 100
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModel: this.closeModel,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart


            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }