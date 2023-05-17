import { combineReducers } from "redux";
import todoReducer from "./tasks/reducer";

const rootReducer = combineReducers({
  tasks: todoReducer,
});

export default rootReducer;
