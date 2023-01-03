import { checkAuth } from "./AuthReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  checkAuth,
});

export default rootReducer;
