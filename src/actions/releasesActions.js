import axios from "axios";
import {labelReleases} from "../APIs/discogs";
import {label} from "../APIs/discogs";
//Action creator

export const loadReleases = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_RELEASES",
    payload: {
      loading: true,
    },
  });
  const pageNumber = await axios.get(labelReleases(id, 1));
  let allData = [];
  for (let i = 1; i <= pageNumber.data.pagination.pages; i++) {
    let data = await axios.get(labelReleases(id, i));
    allData.push(data.data.releases);
  }
  let releasesData = [].concat.apply([], allData);
  const labelData = await axios.get(label(id));
  //creates dictionary to store all unique records
  const releasesByTitle = {};
  const releases = [];
  //checks dictionary to see if record by a certain title is already in the dictionary
  //if it is, skip this record, else, add it to the dictionary
  // eslint-disable-next-line
  releasesData.map((release) => {
    if (!release.format.includes("File") && release.thumb) {
      if (!releasesByTitle[release.title]) {
        releasesByTitle[release.title] = release;
      } else {
        if (releasesByTitle[release.title].format.includes("W/Lbl")) {
          releasesByTitle[release.title] = release;
        }
        if (releasesByTitle[release.title].format.includes("Promo")) {
          releasesByTitle[release.title] = release;
        }
        if (releasesByTitle[release.title].format.includes("TP")) {
          releasesByTitle[release.title] = release;
        }
        if (releasesByTitle[release.title].format.includes("Pap")) {
          releasesByTitle[release.title] = release;
        }
      }
    }
  });
  //add the records in dictionary to releases array to pass to reducer
  for (let prop in releasesByTitle) {
    releases.push(releasesByTitle[prop]);
  }
  dispatch({
    type: "FETCH_RELEASES_SUCCESS",
    payload: {
      all: releases,
      label: labelData.data,
      loading: false,
    },
  });
};
