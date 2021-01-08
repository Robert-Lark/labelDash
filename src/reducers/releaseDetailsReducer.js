const initialState = {
    detail: {},

  };
  
  const releaseDetailReducer = (state = initialState, action) => {
      switch(action.type){
          case "GET_DETAIL":
    
              return{
                  ...state,
                 detail: action.payload.releaseData,
              }
              default:
                  return{...state}
      }
  };
  
  export default releaseDetailReducer