import React, { Component } from 'react'
import {connect} from 'react-redux'
 class GioHangRedux extends Component {
  render() {
    // console.log(this.props.gioHang)
    return (

      <div>


        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{width:'1000px'}}>
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Thành Tiền</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                   {this.props.gioHang.map((spGH,index) => {
                     return <tr key={index}>
                       <td>{spGH.maSP}</td>
                       <td><img src={spGH.hinhAnh} alt={spGH.hinhAnh} width={50} height = {50} /></td>
                       <td>{spGH.tenSP}</td>
                       <td>{spGH.giaBan.toLocaleString()}</td>
                       <td>
                        <button  className='btn btn-primary mr-1 px-1 py-0' onClick={() => {this.props.tangGiamSL(spGH.maSP,true)}}>+</button>
                        {spGH.soLuong.toLocaleString()}
                        <button className='btn btn-primary ml-1 px-2 py-0' onClick={() => {this.props.tangGiamSL(spGH.maSP,false)}}>-</button>
                        </td>
                       <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                       <td><button onClick={() => {this.props.Xoa_Item(spGH.maSP)}} className='btn btn-danger'>Xoá</button></td>
                     </tr>
                   })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    gioHang: state.stateGioHang.gioHang
  }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        Xoa_Item : (maSP) => {
          let action = {
            type:'Xoa_Item',
            maSP
          };
          dispatch(action);
        },
        tangGiamSL : (maSP,tangGiam) => {
          let action = {
            type: 'Tang_Giam_SL',
            maSP,
            tangGiam
          }
          dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (GioHangRedux)