import { DAT_GHE, HUY_GHE } from "../Types/BaiTapDatVeType";

const stateDefaults = {
    danhSachGheDangDat : [
       
    ]
}

const BaiTapDatVeReducer = (state = stateDefaults, action) => {
    switch (action.type) {
        case DAT_GHE:{
            let danhSachGheDangDatUpDate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpDate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if (index !== -1) {
                danhSachGheDangDatUpDate.splice(index, 1);
            }else{
                danhSachGheDangDatUpDate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpDate
            return { ...state }
        }

        case HUY_GHE :{
            let danhSachGheDangDatUpDate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpDate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe)
            if (index !== -1) {
                danhSachGheDangDatUpDate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpDate;
            return { ...state }

        }
        default: return {...state}
    }
}

export default BaiTapDatVeReducer