

const stateDefaults = {
    taiXiu: true,
    mangXucXac:[
        {ma:1,hinhAnh:'./asset/XucXac/1.png'},
        {ma:1,hinhAnh:'./asset/XucXac/1.png'},
        {ma:1,hinhAnh:'./asset/XucXac/1.png'}
    ],
    soBanThang:0,
    tongSoBanChoi:0
}

const BaiTapXucXacReducer =  (state = stateDefaults, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return { ...state}
        case 'PLAY_GAME':
            let mangXucXacNew = [];
            for (let i = 0; i < 3 ; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = {ma:soNgauNhien,hinhAnh:`./asset/XucXac/${soNgauNhien}.png`};
                mangXucXacNew.push(xucXacNgauNhien);
            }
            state.mangXucXac = mangXucXacNew;
            state.tongSoBanChoi += 1;

            let tongDiem = mangXucXacNew.reduce((tongDiem, xucXac,index) => {
                return tongDiem += xucXac.ma;
            },0)

            if(tongDiem >11 && state.taiXiu || tongDiem <= 11 && !state.taiXiu){
                state.soBanThang += 1;
            }

            return { ...state };

        default: return { ...state}
    }
}

export default BaiTapXucXacReducer;