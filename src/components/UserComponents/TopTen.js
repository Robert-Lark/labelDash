import React from "react";
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";

function TopTen(props) {
  const {user} = useAuth0();
  const {picture} = user;

  const data = [
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
  ];

  return (
    <Container>
      <div>
        <h4>Top Ten</h4>
      </div>
      <Image>
        {data.map((image) => (
          <img src={image} alt="topTenImage" />
        ))}
      </Image>
    </Container>
  );
}

const Container = styled.div`
border: 1px solid gainsboro;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 6vw;
    max-height: 100%;
    border-radius: 20px;
  }
`;
const Image = styled.div`
  display: flex;
  gap: 2px;
`;
export default TopTen;
