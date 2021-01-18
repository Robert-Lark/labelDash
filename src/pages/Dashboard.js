import React from "react";
import {useDispatch} from "react-redux";
import {loadReleases} from "../actions/releasesActions";
//CSS
import styled from "styled-components";
//import {mediaPhone, mediaTabletPortrait, mediaTabletLandscape, mediaLargeDesktop} from '../utils/mediaMixins'
//IMG
import denovaliLogo from "../img/denovaliLogo.jpg";
import ErasedTapesLogo from "../img/ErasedTapesLogo.png";
import kirecordsLogo from "../img/kirecordsLogo.jpg";
import miasmah_logo from "../img/miasmah_logo.jpg";
import SONICPIECES_LOGO from "../img/SONICPIECES_LOGO.jpg";
import imageLoading from "../img/loading.jpeg";
import Releases from "./Releases";
import {useSelector} from "react-redux";
import Feed from "../components/Feed";

function Dashboard() {
  const {all, loading} = useSelector((state) => state.releases);
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
            <h3>Your Collection</h3>
          </Button>
          <Button>
            <h3>Request A Title</h3>
          </Button>
          <Button>
            <h3>Reccomendations</h3>
          </Button>
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
        {all === 0 ? (
          <InstructionContainer
            style={loading ? {display: "none"} : {display: "auto"}}
          >
            <Feed />
          </InstructionContainer>
        ) : (
          <ReleasesContainer>
            <Releases loading={loading} />
          </ReleasesContainer>
        )}
        {loading ? (
          <InstructionContainer
            style={all ? {display: "none"} : {display: "auto"}}
          >
            <LoadingImage src={imageLoading} alt="loading" />
            <p>Loading</p>
          </InstructionContainer>
        ) : (
          <></>
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
  @media (max-width: 600px) {
    height: 5vh;
    padding-top: 10px;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  @media (orientation: landscape) and (max-width: 900px) {
    display: grid;
    grid-template-columns: 25vw 60vw 1fr;
  }
`;
const ButtonContainer = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  height: 90vh;
  width: 40vw;
  padding: 50px;
  display: grid;
  gap: 20px;
  @media (max-width: 1400px) {
    padding-top: 10px;
    height: 90vh;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 38vw;
  }
  @media (orientation: landscape) and (max-width: 900px) {
    width: 20vw;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(5vh, 1fr));
    gap: 5px;
    padding: 5px;
  }
`;

const Button = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  width: 30vw;
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
  @media (min-width: 1400px) {

    h3{

      overflow: hidden;
    }
  }
  @media (max-width: 1400px) {
    h3 {
      padding: 5px;
    }
  }
  @media (orientation: landscape) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18vw;

    h3 {
      padding-bottom: 20px;
    }
    img {
      border-radius: 20px;
      max-width: auto;
      max-height: auto;
      width: 40%;
      cursor: pointer;
      padding: 0px 0;
    }
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
  @media (max-width: 600px) {
    width: 70vw;
    padding: 10px;
  }
  @media (orientation: landscape) and (max-width: 900px) {
    width: 70vw;
  }
`;

const InstructionContainer = styled.div`
  height: 90vh;
  width: 55vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 600px) {
    width: 75vw;
  }
  @media (orientation: landscape) and (max-width: 900px) {
    width: 70vw;
  }
`;
const LoadingImage = styled.img`
  width: 13vw;
  height: 20vh;
  transform: rotate(360deg);
`;
export default Dashboard;
