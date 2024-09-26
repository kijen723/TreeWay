import { combineReducers } from "redux";
import counterSlice from "./slice/counterSlice";
import sidecontrolSlice from "./slice/sidecontrolSlice";
import dumdataSlice from "./slice/dumdataSlice";
import shopIndexSlice from "./slice/shopIndexSlice";

const rootReducer = combineReducers({
    counter : counterSlice,
    sidecontrol : sidecontrolSlice,
    dumdata : dumdataSlice,
    shopIndex : shopIndexSlice,
})

export default rootReducer;