import React from "react";
import {useDispatch} from "react-redux";
import {loadReleases} from "../actions/releasesActions";
import styled from "styled-components";
import denovaliLogo from "../img/denovaliLogo.jpg";
import ErasedTapesLogo from "../img/ErasedTapesLogo.png";
import kirecordsLogo from "../img/kirecordsLogo.jpg";
import miasmah_logo from "../img/miasmah_logo.jpg";
import SONICPIECES_LOGO from "../img/SONICPIECES_LOGO.jpg";
import ReleasesSmall from "./ReleasesSmall";
import {useSelector} from "react-redux";

function Dashboard() {
  const data = useSelector((state) => state.releases.all);
  console.log(data);
  const dispatch = useDispatch();
  const labelHandler = (id) => {
    dispatch(loadReleases(id));
  };

  return (
    <Container>
      <Nav>
        <h1>RECORD STORE</h1>
      </Nav>
      <BodyContainer>
        <ButtonContainer>
          <Button>
            <img
              src={denovaliLogo}
              alt="labelLogo0"
              onClick={() => labelHandler(90336)}
            />
          </Button>
          <Button>
            <img
              src={ErasedTapesLogo}
              alt="labelLogo1"
              onClick={() => labelHandler(88949)}
            />
          </Button>
          <Button>
            <img
              src={kirecordsLogo}
              alt="labelLogo2"
              onClick={() => labelHandler(153824)}
            />
          </Button>
          <Button>
            <img
              src={miasmah_logo}
              alt="labelLogo3"
              onClick={() => labelHandler(23127)}
            />
          </Button>
          <Button>
            <img
              src={SONICPIECES_LOGO}
              alt="labelLogo4"
              onClick={() => labelHandler(157803)}
            />
          </Button>
        </ButtonContainer>
        {data===0 ? (
          <InstructionContainer>
            <h2>Select a label to explore its Releases</h2>
          </InstructionContainer>
        ) : (
          <ReleasesContainer>
            <ReleasesSmall />
          </ReleasesContainer>
        )}
      </BodyContainer>
    </Container>
  );
}
const Container = styled.div``;
const Nav = styled.nav`
  padding: 20px;
  height: 10vh;
  width: 100vw;
`;

const BodyContainer = styled.div`
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
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50px;
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0px 0px 10px 4px #e0e0e0;
    border: 1px solid #daf1ff;
    cursor: pointer;
  }
`;
const ReleasesContainer = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  height: 90vh;
  width: 55vw;
  padding: 50px;
  display: grid;
  gap: 20px;
`;

const InstructionContainer = styled.div`
  height: 80vh;
  width: 55vw;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Dashboard;
