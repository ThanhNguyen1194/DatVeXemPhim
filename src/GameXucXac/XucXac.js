import React, { Component } from 'react';
import {connect} from 'react-redux';
class xucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((item, indexItem) => {
            return <img key={indexItem} className='xucXacImg' src={item.hinhAnh} alt={item.hinhAnh}/>
        })
    }
  render() {
    return (
      <div className='mt-5'>
       {this.renderXucXac()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        mangXucXac: state.BaiTapXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(xucXac);
