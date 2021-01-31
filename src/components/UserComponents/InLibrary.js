import React from 'react';
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";


function InLibrary(props) {
    const {user} = useAuth0();
    const {picture} = user;
    const data = [
        picture,
        picture,
        picture,
        picture,
        picture,
      ];
    return (
        <Container>
            <h4>Library</h4>
            <Image>
            <Button>Add A Title</Button>
        {data.map((image) => (
          <img src={image} alt="topTenImage" />
        ))}
      </Image>
        </Container>
    );
}

const Container = styled.div`
box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  text-align: center;
  border-radius: 10px;
  img {
    max-width: 6vw;
    max-height: 100%;
    border-radius: 20px;
  }
`
const Image = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
`;
const Button = styled.button`
    max-width: 6vw;
    max-height: 100%;
    border-radius: 20px;
`
export default InLibrary;