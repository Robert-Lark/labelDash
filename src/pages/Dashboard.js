import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {loadReleases} from "../actions/releasesActions";
import {loadReccomended} from "../actions/reccomendedAction";
import { Switch, Route } from 'react-router-dom'
//CSS
import styled from "styled-components";
//import {mediaPhone, mediaTabletPortrait, mediaTabletLandscape, mediaLargeDesktop} from '../utils/mediaMixins'
import Nav from '../components/Nav'
import Loading from '../components/Loading'
//IMG
import denovaliLogo from "../img/denovaliLogo.jpg";
import ErasedTapesLogo from "../img/ErasedTapesLogo.png";
import kirecordsLogo from "../img/kirecordsLogo.jpg";
import miasmah_logo from "../img/miasmah_logo.jpg";
import SONICPIECES_LOGO from "../img/SONICPIECES_LOGO.jpg";
//import imageLoading from "../img/loading.jpeg";
import Releases from "./Releases";
import {useSelector} from "react-redux";
import Feed from "../components/Feed";
import Reccomendations from "../components/Reccomendations";

function Dashboard() {
  const [reccomendations, setReccomendations] = useState(false);
  const {all, loading} = useSelector((state) => state.releases);
  const dispatch = useDispatch();
  const labelHandler = (id) => {
    dispatch(loadReleases(id));
    setReccomendations(false);
  };
  const reccomended = () => {
    setReccomendations(true);
    dispatch(loadReccomended());
  };
  return (
    <Container>
      {/* <Nav>
        <h1>A Collection Of Sonic Architecture</h1>
        <div>
          <Button className="logSignButton">Log In</Button>
        </div>
      </Nav> */}
      <Nav/>
      <BodyContainer>
        <ButtonContainer>
          <Button>
            <h3>Library</h3>
          </Button>
          {/* <Button>
            <h3>Request A Title</h3>
          </Button> */}
          <Button>
            <h3>Search</h3>
          </Button>
          <Button onClick={() => reccomended()}>
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
        {reccomendations ? (
          <InstructionContainer
            style={
              loading
                ? {display: "none"}
                : {display: "auto", overflow: "hidden"}
            }
          >
            <Reccomendations />
          </InstructionContainer>
        ) : all === 0 ? (
          <InstructionContainer
            style={
              loading
                ? {display: "none"}
                : {display: "auto", overflow: "hidden"}
            }
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
            <Loading/>
            
          </InstructionContainer>
        ) : (
          <></>
        )}
      </BodyContainer>
    </Container>
  );
}
const Container = styled.div``;
// const Nav = styled.nav`
//   padding: 20px;
//   height: 12vh;
//   width: 100vw;
//   overflow: hidden;
// display: flex;
// justify-content: space-between;
// div{
//   @media (max-width: 600px) {
// display: flex;
//   }
//   @media (max-width: 400px) {
//    flex-direction: column;
//    height:3vh;
//   }
// .logSignButton{
//   width: 15vw;
//   margin: 5px;
//   @media (max-width: 600px) {
//     width: 15vw;
//     height: 2vh;
//     font-size: .5rem;
//   }
//   @media (max-width: 400px) {
//     width: 15vw;
//     height: 5vh;
//     margin: 2px;
//     font-size: 8px;
//   }
// }
// }
//   h1 {
//     @media (min-width: 1800px) {
//       font-size: 5rem;
//     }
//     @media (min-width: 1400px) {
//       font-size: 4rem;
//     }
//     @media (max-width: 1400px) {
//       font-size: 3rem;
//     }
//     @media (max-width: 1130px) {
//       font-size: 2.5rem;
//     }
//     @media (max-width: 900px) {
//       font-size: 1.5rem;
//     }
//     @media (max-width: 600px) {
//       font-size: 1rem;
//     }
//     @media (max-width: 400px) {
//       font-size: .8rem;
//     }
//   }
//   @media (max-width: 600px) {
//     height: 5vh;
//     padding-top: 10px;
//   }
//   @media (max-width: 400px) {
//     height: 8vh;
//   }
//   @media (orientation: landscape) and (max-width: 900px) {
//     height: 20vh;
//   }
// `;

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
  cursor: pointer;
  img {
    border-radius: 20px;
    max-width: 100%;
    max-height: 100%;

    padding: 5px;
  }
  @media (min-width: 1400px) {
    h3 {
      font-size: 3rem;
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
  @media (min-width: 1800px) {
    height: 89vh;
  }
  @media (max-width: 600px) {
    width: 75vw;
  }
  @media (orientation: landscape) and (max-width: 900px) {
    width: 70vw;
  }
`;
// const LoadingImage = styled.img`
//   width: 13vw;
//   height: 20vh;
//   transform: rotate(360deg);
//   @media (max-width: 600px) {
//     width: 40vw;
//   }
// `;
export default Dashboard;
