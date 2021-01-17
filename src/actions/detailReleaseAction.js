import axios from "axios";
import {releaseDetailsURL} from "../APIs/discogs";
import {isVideoDown} from "../utils/isVideoDown";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(releaseDetailsURL(id));
  if(detailData.data.videos){
    for(let currentVideo of detailData.data.videos){
      let videoAvailable = await isVideoDown(currentVideo)
      
      if(!videoAvailable){
        detailData.data.videos = detailData.data.videos.filter(video => currentVideo.uri !== video.uri)
      }
    }
  }
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
