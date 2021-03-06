//Base URL
const base_url = "https://api.discogs.com/";
//Call the label function on the button that the user will click when they select
//which label they would like to view => pass the label ID retrieved from Discogs
//and also the page number this function can also be called on the button the user
//clicks when they want to see more titles by passing in the same label id but a different page#

export const label = (labelId, pageNumber) =>
  `${base_url}labels/${labelId}/releases?page=${pageNumber}&per_page=100&key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;

//RELEASE DETAILS
export const releaseDetailsURL = (releaseId) =>
  `${base_url}masters/${releaseId}`;
  

//FORMAT DETAILS

export const formatDetailsURL = (releaseId) => `${base_url}masters/${releaseId}/versions`
