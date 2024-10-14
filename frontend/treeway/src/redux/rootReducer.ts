import { combineReducers } from 'redux';
import counterSlice from './slice/counterSlice';
import sidecontrolSlice from './slice/sidecontrolSlice';
import dumdataSlice from './slice/dumdataSlice';
import shopIndexSlice from './slice/shopIndexSlice';
import authSlice from './slice/authSlice';
import analyzeDetailSlice from './slice/analyzeDetailSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  sidecontrol: sidecontrolSlice,
  dumdata: dumdataSlice,
  shopIndex: shopIndexSlice,
  auth: authSlice,
  analyzeDetailSlice: analyzeDetailSlice,
});

export default rootReducer;
