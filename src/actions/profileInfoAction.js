import axios from "axios";

export const loadUserInfo = (email) => async (dispatch) => {
const idInfo = []
  const userData = await axios.get(
    "https://sonicarchbackend.herokuapp.com/library"
  );

  console.log(userData.data);
  
  if (userData.data.email === email) {
      idInfo.push(userData.data)
      console.log(idInfo)
  }

};

//   dispatch({
//     type: "LOADING_USER",
//   });

//   dispatch({
//     type: "GET_USER_INFO",
//     payload: {
//       UserData: userData.data,

//     },
//   });
