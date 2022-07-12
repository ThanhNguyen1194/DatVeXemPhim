import React, { Component } from 'react';
import {connect} from 'react-redux'

 class ProductItemRedux extends Component {
  render() {

    const { product } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" style={{height: '350px'}} src={product.hinhAnh} alt='' />
        <div className="card-body text-center">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product.giaBan.toLocaleString()}</p>
          <button className='btn btn-primary' onClick={() => {this.props.themGioHang(product)}}>Thêm vào giỏ hàng</button>
        </div>
      </div>

    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang : (sanPham) => {
      let spGioHang = {
        maSP:sanPham.maSP,
        tenSP:sanPham.tenSP,
        hinhAnh:sanPham.hinhAnh,
        soLuong:1,
        giaBan:sanPham.giaBan,
      }
      // console.log(spGioHang);
      let action = {
        type : 'THEM_GIO_HANG',
        spGioHang
      };
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(ProductItemRedux)