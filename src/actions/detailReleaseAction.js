import axios from 'axios'
import {releaseDetailsURL} from '../APIs/discogs'

export const loadDetail = (id) => async (dispatch) => {
const detailData = await axios.get(releaseDetailsURL(id))
dispatch({
    type: "GET_DETAIL",
    payload: {
        releaseData: detailData.data,
    }
})
}