import {combineReducers} from "redux";

import releasesReducer from "./releasesReducer";
import releaseDetailReducer from './releaseDetailsReducer'

const rootReducer = combineReducers({

  releases: releasesReducer,
  detail: releaseDetailReducer
});

export default rootReducer;
