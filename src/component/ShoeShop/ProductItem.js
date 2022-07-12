import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
      let {DataItem} = this.props
    return (
        <div className="card text-left">
        <img className="card-img-top" src={DataItem.image} alt={DataItem.image} />
        <div className="card-body">
            <h4 className="card-title">{DataItem.name}</h4>
            <p className="card-text">{DataItem.price}</p>
            <button className='btn btn-dark text-light rounded-0'>Add to Card <i class="fa fa-shopping-cart"></i></button>
        </div>
    </div>
    )
  }
}
