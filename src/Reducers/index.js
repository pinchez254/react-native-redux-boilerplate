import { combineReducers } from "redux";
import Librariesreducer from "./LibrariesReducer";
import SelectedReducer from "./SelectedReducer";

export default combineReducers({
  libraries: Librariesreducer,
  ActiveLibrary: SelectedReducer
});
