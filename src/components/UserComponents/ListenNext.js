import React from 'react';
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";


function ListenNext(props) {
    const {user} = useAuth0();
    const {picture} = user;
    return (
        <Container>
           <div>
               <h4>Listen Next</h4>
           </div>
           <Image>
        <img src={picture} alt="Profile" />
      </Image>
        </Container>
    );
}

const Container = styled.div`
border: 1px solid gainsboro;
  border-radius: 10px;
  width: 14vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  img{
    
      max-width: 8vw;
      max-height: 100%;
    border-radius: 20px;
  }
`
const Image = styled.div``;

export default ListenNext;