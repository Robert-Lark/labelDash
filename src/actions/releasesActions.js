import axios from 'axios'
import {label} from '../APIs/discogs'

//Action creator

export const loadReleases = () => async (dispatch) => {
const releasesData = await axios.get(label(90336, 1))
dispatch({
    type: "FETCH_RELEASES",
    payload: {
        all: releasesData.data.releases
    }
})
}