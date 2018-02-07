import {combineReducers} from "redux";
import weather from "./weather";
import locations from "./locations";

export default combineReducers({weather, locations});
