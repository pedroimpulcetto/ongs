import { combineReducers } from "redux";

import alert from "./alert/reducer";
import loading from "./loading/reducer";

export default combineReducers({
  alert,
  loading
});
