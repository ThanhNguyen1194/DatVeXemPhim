import {combineReducers} from 'redux';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';
import BaiTapGioHangReducer from './BaiTapGioHangReDucer'
import BaiTapXucXacReducer from './BaiTapXucXacReducer';

const rootReducer = combineReducers({
    stateGioHang : BaiTapGioHangReducer,
    BaiTapXucXacReducer,
    BaiTapDatVeReducer
});

export default rootReducer;