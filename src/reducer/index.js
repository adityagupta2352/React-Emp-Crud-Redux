import mainEmp from "./CreateEmp";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mainEmp: mainEmp,
});
export default rootReducer;
