
import axios from "axios";
import {releaseDetailsURL} from "../APIs/discogs";
//import {formatDetailsURL} from '../APIs/discogs'

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(releaseDetailsURL(id));
  //const formatDetails = await axios.get(master).then(res =>  axios.get(formatDetailsURL(res.data.master_id)))

  dispatch({
    type: "LOADING_DETAIL",
  });
  

  dispatch({
    type: "GET_DETAIL",
    payload: {
      releaseData: detailData.data,
      //formatData: formatDetails.data
    },
  });
};
