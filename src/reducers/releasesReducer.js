const initState = {
  popular: [],
  newReleases: [],
  all: [],
  label: [],
  preorders: [],
  search: [],
};

const releasesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RELEASES":
      return {...state, all: action.payload.all, label: action.payload.label};
    default:
      return {...state};
  }
};

export default releasesReducer;
//push comment
