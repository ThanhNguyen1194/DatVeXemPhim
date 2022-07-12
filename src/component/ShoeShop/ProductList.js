import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProductItem = () => {
        return this.props.arrayProduct.map((item, index) => {
            return <div className='col-4 mb-3 w3-animate-zoom' style={{width:'250px'}} key={index}>
            <ProductItem DataItem={item}/>
            </div>

        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderProductItem()}
            </div>
        )
    }
}
