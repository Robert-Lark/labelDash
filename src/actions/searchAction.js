import axios from "axios";
import {searchTitles} from "../APIs/discogs";


export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(searchTitles(id));
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
