import React, { Component } from 'react'
import {connect} from 'react-redux'
import { datGheAction } from '../../Redux/Action/BaiTapDatVeAction'
 class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
            let cssGheDaDat = ""
            let disabled = false
            if(ghe.daDat){
                cssGheDaDat = "gheDuocChon"
                disabled = true
            }
            //trang thai ghe dang dat
            let cssGheDangChon = ""
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
                if(indexGheDangDat !== -1){
                    cssGheDangChon = "gheDangChon"
                }
            


            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang,index) =>{
                return <button className='rowNumber'>
                    {hang.soGhe}
                </button>
        })
    }
    renderHangGhe = () => {
        if(this.props.soHangGhe === 0){
            return <div>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        }else{
            return <div>
             {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
        }

        
    }

    render() {
        return (
            <div className="text-light" style={{fontSize: "30px"}}>
               {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat : state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)