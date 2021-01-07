const initState = {
  popular: [],
  newReleases: [],
  all: [],
  preorders: [],
  search: [],
};

const releasesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RELEASES":
      return {...state, all: action.payload.all};
    default:
      return {...state};
  }
};

export default releasesReducer;
