import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import profileReducer from "./profileReducer";

const reducer = combineReducers({
  userReducer,
  cartReducer,
  profileReducer
});

export default reducer;
