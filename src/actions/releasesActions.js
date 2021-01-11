import axios from "axios";
import {label} from "../APIs/discogs";

//Action creator

export const loadReleases = () => async (dispatch) => {
  const releasesData = await axios.get(label(90336, 1));
  //creates dictionary to store all unique records
  const releasesByTitle = {};
  const releases = [];
  //checks dictionary to see if record by a certain title is already in the dictionary
  //if it is, skip this record, else, add it to the dictionary
  releasesData.data.releases.map((release) => {
    if (!releasesByTitle[release.title]) {
      releasesByTitle[release.title] = release;
    }
  });
  //add the records in dictionary to relseases array to pass to reducer
  for(let prop in releasesByTitle){
      releases.push(releasesByTitle[prop]);
  }
  dispatch({
    type: "FETCH_RELEASES",
    payload: {
      all: releases
    },
  });
};
