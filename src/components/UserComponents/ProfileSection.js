import React from "react";
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";

const ProfileSection = () => {
  const {user} = useAuth0();
  const {name, picture, email, nickname} = user;
  console.log(user);

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