import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import  mobileReducer  from "./mobilesReducers"

const rootReducer = combineReducers({
    userState: userReducer,
    mobileState:mobileReducer,

});

export default rootReducer;