import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import moviesReducer from "./moviesReducer";


export default combineReducers({
  movieslist: moviesReducer,
  auth: authReducer,
  errors: errorReducer
});
