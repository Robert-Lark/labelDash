import React from 'react'
import {Switch, Route} from "react-router-dom";
//CSS
import styled from "styled-components";
//COMPONENTS
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import Library from "../components/Library";

//import imageLoading from "../img/loading.jpeg";
import Releases from "./Releases";
import Feed from "../components/Feed";
import Reccomendations from "../components/Reccomendations";
import Search from '../components/Search'

function DashboardCopy() {



  return (
    <Container>
      <Nav />
      <BodyContainer>
        <SideNav />

        <InstructionContainer>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/denovali" component={Releases} />
            <Route path="/sonicPieces" component={Releases} />
            <Route path="/miasmah" component={Releases} />
            <Route path="/erasedTapes" component={Releases} />
            <Route path="/ki" component={Releases} />
            <Route path="/library" component={Library} />
            <Route path="/search" component={Search} />
            <Route path="/reccomendations" component={Reccomendations} />
          </Switch>
        </InstructionContainer>
      </BodyContainer>
    </Container>
  );
}

// {reccomendations ? (
//   <InstructionContainer
//     style={
//       loading
//         ? {display: "none"}
//         : {display: "auto", overflow: "hidden"}
//     }
//   >
//     <Reccomendations />
//   </InstructionContainer>
// ) : all === 0 ? (
//   <InstructionContainer
//     style={
//       loading
//         ? {display: "none"}
//         : {display: "auto", overflow: "hidden"}
//     }
//   >
//     <Feed />
//   </InstructionContainer>
// ) : (
//   <ReleasesContainer>
//     <Releases loading={loading} />
//   </ReleasesContainer>
// )}
// {loading ? (
//   <InstructionContainer
//     style={all ? {display: "none"} : {display: "auto"}}
//   >
//     <Loading/>

//   </InstructionContainer>
// ) : (
//   <></>
// )}

const Container = styled.div`
max-height: 98vh;
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

const InstructionContainer = styled.div`
  max-height: 85vh;
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

export default DashboardCopy;
