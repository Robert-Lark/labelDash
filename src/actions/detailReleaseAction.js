import axios from "axios";
import {releaseDetailsURL} from "../APIs/discogs";
import {formatDetailsURL} from '../APIs/discogs'
export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  
  const detailData = await axios.get(releaseDetailsURL(id));
  const formatDetails = await axios.get(formatDetailsURL(id))
  dispatch({
    type: "GET_DETAIL",
    payload: {
      releaseData: detailData.data,
      formatData: formatDetails.data
    },
  });
};
