import { combineReducers } from "redux";
import loggedReducer from "./reducers/isLogged";
import taskReducer from "./reducers/tasks";
import userReducer from "./reducers/user";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  tasks: taskReducer,
  user: userReducer
});
export default allReducers;
