import React from "react";
import styled from "styled-components";

function Feed(props) {
  return (
    <div>
      <BodyContainer>
        <ButtonContainer>
          <h1>FEED</h1>
          <Button>
            <h3>Your Collection</h3>
          </Button>
          <Button>
            <h3>Request A Title</h3>
          </Button>
          <Button>
            <h3>Reccomendations</h3>
          </Button>
          <Button>
            <h3>Your Collection</h3>
          </Button>
          <Button>
            <h3>Request A Title</h3>
          </Button>
          <Button>
            <h3>Reccomendations</h3>
          </Button>
        </ButtonContainer>
      </BodyContainer>
    </div>
  );
}

export default Feed;

const BodyContainer = styled.div`
  margin-top: 20%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
`;

const ButtonContainer = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  height: 90vh;
  width: 40vw;
  padding: 50px;
  display: grid;
  gap: 20px;
  h1 {
    text-align: center;
  }
`;

const Button = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 20px;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
    padding: 5px;
  }
`;
