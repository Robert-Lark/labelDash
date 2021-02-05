import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {loadReleases} from "../../actions/releasesActions";
import {loadReccomended} from "../../actions/reccomendedAction";
import {Link} from "react-router-dom";
//IMG

import denovaliLogo from "../../img/denovaliLogo.jpg";
import ErasedTapesLogo from "../../img/ErasedTapesLogo.png";
import kirecordsLogo from "../../img/kirecordsLogo.jpg";
import miasmah_logo from "../../img/miasmah_logo.jpg";
import SONICPIECES_LOGO from "../../img/SONICPIECES_LOGO.jpg";

function SideNav(props) {
  const dispatch = useDispatch();
  const labelHandler = (id) => {
    dispatch(loadReleases(id));
  };
  const reccomended = () => {
    dispatch(loadReccomended());
  };
  const userLibrary = () => {
    console.log("works");
  };

  return (
    <ButtonContainer>
      <Link to="/login">
        <Button>
          <h3>Login/signup</h3>
        </Button>
      </Link>
      <Link to="/library">
        <Button onClick={() => userLibrary()}>
          <h3>Library</h3>
        </Button>
      </Link>
      <Link to="/search">
        <Button>
          <h3>Search</h3>
        </Button>
      </Link>
      <Link to="/reccomendations">
        <Button onClick={() => reccomended()}>
          <h3>Reccomendations</h3>
        </Button>
      </Link>
      <Link to="/denovali">
        <Button>
          <img
            src={denovaliLogo}
            alt="labelLogo0"
            onClick={() => labelHandler(90336)}
          />
        </Button>
      </Link>
      <Link to="/erasedTapes">
        <Button>
          <img
            src={ErasedTapesLogo}
            alt="labelLogo1"
            onClick={() => labelHandler(88949)}
          />
        </Button>
      </Link>
      <Link to="/ki">
        <Button>
          <img
            src={kirecordsLogo}
            alt="labelLogo2"
            onClick={() => labelHandler(153824)}
          />
        </Button>
      </Link>
      <Link to="/miasmah">
        <Button>
          <img
            src={miasmah_logo}
            alt="labelLogo3"
            onClick={() => labelHandler(23127)}
          />
        </Button>
      </Link>
      <Link to="/sonicPieces">
        <Button>
          <img
            src={SONICPIECES_LOGO}
            alt="labelLogo4"
            onClick={() => labelHandler(157803)}
          />
        </Button>
      </Link>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  max-height: 85vh;
  width: 40vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1400px) {
    padding-top: 10px;
    height: 90vh;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 43vw;
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
    max-width: 10vw;
    max-height: 100%;
    padding: 5px;
    @media (max-width: 400px) {
      max-width: 70%;
    }
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

export default SideNav;
