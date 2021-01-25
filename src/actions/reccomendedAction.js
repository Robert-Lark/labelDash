import axios from "axios";
import {releaseDetailsURL} from "../APIs/discogs";
import {isVideoDown} from "../utils/isVideoDown";

const reccomendedIds = [
  "11371229",
  "8373541",
  "2272570",
  "3190779",
  "11916454",
  "12978029",
  "3102881",
  "6247414",
  "4581773",
  "3430776",
  "9232222",
  "14412302",
  "11130776",
  "14409791",
  "9402481",
  "4460450",
  "3958862",
  "6239092",
  "8616897",
  "9198920", 
  "10158462", 
  "5956656", 
  "10513139", 
  "1846314", 
  "11985765"
];

export const loadReccomended = () => async (dispatch) => {
  const reccomendedData = []
  for (let i = 0; i < reccomendedIds.length; i++) { 
      
    const titles = await axios.get(releaseDetailsURL(reccomendedIds[i]));
    reccomendedData.push(titles.data);
  }

  if (reccomendedData.videos) {
    for (let currentVideo of reccomendedData.videos) {
      let videoAvailable = await isVideoDown(currentVideo);

      if (!videoAvailable) {
        reccomendedData.videos = reccomendedData.videos.filter(
          (video) => currentVideo.uri !== video.uri
        );
      }
    }
  }

  dispatch({
    type: "LOADING_DETAIL",
  });

  dispatch({
    type: "GET_DETAIL",
    payload: {
      reccomended: reccomendedData,
      //formatData: formatDetails.data
    },
  });
};
