import React, {useEffect} from "react";
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";
import axios from 'axios'
//import {useDispatch} from "react-redux";

//import {loadUserInfo} from "../../actions/profileInfoAction";

const ProfileSection = () => {
  //const dispatch = useDispatch();
  const {user} = useAuth0();
  const {name, picture, email, nickname} = user;

useEffect(() => {
  axios.get(`https://sonicarchbackend.herokuapp.com/profile/`)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
 // eslint-disable-next-line
  },[])
//   useEffect(() => {
//     axios.get(`https://sonicarchbackend.herokuapp.com/library/`)
//     .then(function (response) {
//       const idInfo = response.data.filter((userInfo) => userInfo.nickname === nickname)
//       console.log(idInfo);
//       dispatch(loadUserInfo())
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// },[nickname])
//   const ExternalApiUsers = () => {
//     axios.get(`https://sonicarchbackend.herokuapp.com/library/`)
//   .then(function (response) {
//     const idInfo = response.filter((userInfo) => userInfo.nickname === nickname)
//     console.log(idInfo);

//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   };







  return (
    <ProfileSectionContainer>
      <Image>
        <img src={picture} alt="Profile" />
      </Image>
      <UserInfo>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Artist Name: {nickname}</p>
        <p>Address: </p>
        <p>Bio: </p>
        <p>Favorite Artists: </p>
        <label>
          <p>Sonic Deducer</p>
          <input type="checkbox" />
        </label>
      </UserInfo>
    </ProfileSectionContainer>
  );
};


  /* <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div> */


const ProfileSectionContainer = styled.div`
  width: 35vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid gainsboro;
  border-radius: 10px;
  p{
    
    font-size: .5rem;
  }
  img{
    max-width: 10vw;
    border-radius: 20px;
  }
`;

const Image = styled.div``;
const UserInfo = styled.div`
  label {
    display: flex;
    cursor: pointer;
  }
`;

export default ProfileSection;
