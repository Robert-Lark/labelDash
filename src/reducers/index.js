import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import releasesReducer from './releasesReducer'

const rootReducer = combineReducers({
    games: gamesReducer,
    releases: releasesReducer
})

export default rootReducer