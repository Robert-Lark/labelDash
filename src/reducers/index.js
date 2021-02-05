import {combineReducers} from "redux";
import releasesReducer from "./releasesReducer";
import releaseDetailReducer from "./releaseDetailsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  releases: releasesReducer,
  detail: releaseDetailReducer,
  user: userReducer,
});

export default rootReducer;
