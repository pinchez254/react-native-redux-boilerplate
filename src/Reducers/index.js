import { combineReducers } from "redux";
import Librariesreducer from "./LibrariesReducer";

export default combineReducers({
  libraries: Librariesreducer
});
