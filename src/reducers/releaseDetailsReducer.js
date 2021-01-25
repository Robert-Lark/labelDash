const initialState = {
    detail: {},
    format: {},
    isLoading: true,
    reccomendedData: {}
  };
  
  const releaseDetailReducer = (state = initialState, action) => {
      switch(action.type){
          case "GET_DETAIL":
              return{
                  ...state,
                 detail: action.payload.releaseData,
                 reccomendedData: action.payload.reccomended,
                 format: action.payload.formatData,
                 isLoading: false,
              };
              case "LOADING_DETAIL":
                return {
                    ...state,
                    isLoading: true,
                }
              default:
                  return{...state}
      }
  };
  
  export default releaseDetailReducer