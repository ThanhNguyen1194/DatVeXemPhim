import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import ProductListRedux from './ProductListRedux'

import { connect } from 'react-redux'

 class BaiTapGioHangRedux extends Component {

  renderSoLuong = () => {
    return this.props.gioHang.reduce((tongSoLuong,spGH,index) => {
      return tongSoLuong += spGH.soLuong; 
    },0).toLocaleString();
  }
  render() {
    return (
      <div>
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="text-right mb-3">
        <span data-toggle="modal" data-target="#modelId" className='text-right' style={{width:'17px',cursor:'pointer'}}><i class="fa fa-shopping-cart"></i>({this.renderSoLuong()}) Giỏ Hàng</span>
        </div>
        <ProductListRedux/>
          <GioHangRedux/>
      </div>
    )
  }
}
  const mapStateToProps = (state) => {
    return {
      gioHang: state.stateGioHang.gioHang
    }
  }


export default connect(mapStateToProps)(BaiTapGioHangRedux)