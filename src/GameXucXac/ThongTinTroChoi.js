import React, { Component } from 'react'
import { connect } from 'react-redux'
 class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div>BẠN CHỌN: <span className='text-danger'>{this.props.banChon ? 'TÀI' : 'XỈU'}</span></div>
        <div>SỐ BÀN THẮNG: <span className='text-success'>{this.props.soBanThang}</span></div>
        <div>TỔNG SỐ BÀN CHƠI: <span className='text-warning'>{this.props.soBanChoi}</span></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        banChon: state.BaiTapXucXacReducer.taiXiu,
        soBanThang: state.BaiTapXucXacReducer.soBanThang,
        soBanChoi: state.BaiTapXucXacReducer.tongSoBanChoi,
    }
}

export default connect(mapStateToProps)(ThongTinTroChoi)