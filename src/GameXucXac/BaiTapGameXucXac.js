import React, { Component } from 'react'
import './style.css'
import ThongTinTroChoi from './ThongTinTroChoi'
import XucXac from './XucXac'
import { connect } from 'react-redux'
class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className='backGroundXucXac game pt-5 container-fluid'>
        <div className='game-title text-center display-4'> Bài Tập Game Xúc Xác</div>
        <div className='row text-center'>
          <div className='col-4'>
            <button className='btn btn-primary btnGame' onClick={() => {
              this.props.datCuoc(true);
            }}>Tài</button>
          </div>
          <div className='col-4'>
            <XucXac />
          </div>
          <div className='col-4'>
            <button className='btn btn-primary btnGame' 
            onClick={() => {
              this.props.datCuoc(false);
            }}>Xỉu</button>
          </div>
        </div>
        <div className='container text-center GameDetail'>
          <ThongTinTroChoi />
          <button className='btn btn-success btnPlayGame' onClick={() => {
            this.props.playGame();
          }}>PLAY GAME</button>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: 'DAT_CUOC',
        taiXiu
      }
        dispatch(action);
    },
    playGame: () => {
        // let action = {
        //   type: 'PLAY_GAME',
        // }

        // dispatch(action)

        dispatch({
          type: 'PLAY_GAME',
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac)