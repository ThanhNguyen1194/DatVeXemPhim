import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

export default class ExerciseCar extends Component {
    productList = [
        {id: 1, name: 'black car', img:'./products/black-car.jpg', price:'1000'},
        {id: 2, name: 'red car', img:'./products/red-car.jpg', price:'2000'},
        {id: 3, name: 'silver car', img:'./products/silver-car.jpg', price:'3000'},
        {id: 4, name: 'steel car', img:'./products/steel-car.jpg', price:'4000'},
    ];

    state = {
       productDetail: {id: 1, name: 'black car', img:'./products/black-car.jpg', price:'1000'},
    }
    xemChiTiet = (newProduct) => {
        this.setState({
            productDetail: newProduct
        })
    }
  render() {
    return (
      <div className='container'>
          <h3>Danh sách Xe</h3>
          <Modal content={this.state.productDetail} />
            <ProductList xemChiTiet={this.xemChiTiet} productData={this.productList}/>
      </div>
    )
  }
}
