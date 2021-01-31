import React from "react";
import styled from "styled-components";
import AuthNav from "./auth-nav";


function Nav(props) {
  return (
    <NavBar>
      <h1>A Collection Of Sonic Architecture</h1>
      <AuthNav/>
    </NavBar>
  );
}

const NavBar = styled.nav`
  padding: 20px;
  height: 12vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  div {
    @media (max-width: 600px) {
      display: flex;
    }
    @media (max-width: 400px) {
      flex-direction: column;
      height: 3vh;
    }
    .logSignButton {
      width: 15vw;
      margin: 5px;
      @media (max-width: 600px) {
        width: 15vw;
        height: 2vh;
        font-size: 0.5rem;
      }
      @media (max-width: 400px) {
        width: 15vw;
        height: 5vh;
        margin: 2px;
        font-size: 8px;
      }
    }
  }
  h1 {
    @media (min-width: 1800px) {
      font-size: 5rem;
    }
    @media (min-width: 1400px) {
      font-size: 4rem;
    }
    @media (max-width: 1400px) {
      font-size: 3rem;
    }
    @media (max-width: 1130px) {
      font-size: 2.5rem;
    }
    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
    }
    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 600px) {
    height: 5vh;
    padding-top: 10px;
  }
  @media (max-width: 400px) {
    height: 8vh;
  }
  @media (orientation: landscape) and (max-width: 900px) {
    height: 20vh;
  }
`;

export default Nav;
