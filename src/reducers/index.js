import { combineReducers } from "redux";
import todos from "./todos";
import toodler from "./toodler"

const rootReducer = combineReducers({
  todos,
 
});
export default rootReducer;
