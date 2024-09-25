import { combineReducers } from "redux";
import counterSlice from "./slice/counterSlice";
import sidecontrolSlice from "./slice/sidecontrolSlice";

const rootReducer = combineReducers({
    counter : counterSlice,
    sidecontrol : sidecontrolSlice,
})

export default rootReducer;