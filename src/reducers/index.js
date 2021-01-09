import {combineReducers} from "redux";

import releasesReducer from "./releasesReducer";
import releaseDetailReducer from './releaseDetailsReducer'
// import detailReducer from "./detailReducer";
// import gamesReducer from "./gamesReducer";
const rootReducer = combineReducers({
//   games: gamesReducer,
// detail: detailReducer,  
  releases: releasesReducer,
  detail: releaseDetailReducer
});

export default rootReducer;
