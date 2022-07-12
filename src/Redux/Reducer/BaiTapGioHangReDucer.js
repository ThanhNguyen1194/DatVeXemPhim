const stateGioHang = {
    gioHang: []
}

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG':
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)

            if (index !== -1) {
                state.gioHang[index].soLuong += 1;

            } else {
                state.gioHang.push(action.spGioHang)
            }

            state.gioHang = [...state.gioHang];
            return { ...state };
        case 'Xoa_Item':
            let indexItem = state.gioHang.findIndex(spGH => spGH.maSP === action.maSP)
            console.log(indexItem)
            console.log(state)
            if (indexItem !== -1) {

                state.gioHang.splice(indexItem, 1)
            }
            state.gioHang = [...state.gioHang]
            return { ...state };
        case 'Tang_Giam_SL':
            let indexTangGiamSL = state.gioHang.findIndex(spGH => spGH.maSP === action.maSP)
            if(action.tangGiam){
                state.gioHang[indexTangGiamSL].soLuong += 1;
            }else{
                if(state.gioHang[indexTangGiamSL].soLuong > 1){
                    state.gioHang[indexTangGiamSL].soLuong -= 1;
                }else{
                    alert("Số lượng tối thiểu là 1")
                }
            }
            state.gioHang = [...state.gioHang]
            return { ...state };
        default:
            return { ...state };
    }




    // return {...state}
}

export default BaiTapGioHangReducer;