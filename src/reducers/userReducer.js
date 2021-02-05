const initState = {
  name: "",
  email: "",
  image: "",
  cart: [],
  library: [],
  topTen: [],
  loading: false,
};

const releasesReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_USER":
      return {...state, loading: true};
    case "GET_USER_INFO":
      return {
        ...state,
        name: action.payload.nickname,
        email: action.payload.email,
        image: action.payload.image,
        cart: action.payload.cart,
        library: action.payload.library,
        topTen: action.payload.topTen,
        loading: false,
      };
    default:
      return {...state};
  }
};

export default releasesReducer;
