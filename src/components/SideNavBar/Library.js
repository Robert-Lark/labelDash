import React from "react";
import styled from "styled-components";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import Loading from "../Utils/Loading";
import ProfileSection from "../UserComponents/ProfileSection";
import ListenNext from "../UserComponents/ListenNext";
import TopTen from "../UserComponents/TopTen";
import NextShipment from "../UserComponents/NextShipment";
import InLibrary from "../UserComponents/InLibrary";
import RequestATitle from "../UserComponents/RequestATitle";
import AddToLibrary from "../UserComponents/AddToLibrary";

const Library = () => {
  return (
    <Container>
      <One>
        <ProfileSection />
        <ListenNext />
      </One>

      <Two>
        <TopTen />
      </Two>

      <Three>
        <NextShipment />
        <InLibrary />
      </Three>

      <Four>
        <RequestATitle />
        <AddToLibrary />
      </Four>
    </Container>
  );
};
const Container = styled.div`
border: 1px solid gold;
max-width: 53vw;
max-height: 80vh;
display: grid;
grid-template-rows: 2fr 1fr 2fr 2fr;
gap: 2vh;
`
const One = styled.div`
border: 1px solid red;
max-width: 50vw;
display: grid;
grid-template-columns: 3fr 1fr;
`;

const Two = styled.div`
display: flex;
max-width: 50vw;
`;
const Three = styled.div`
display: flex;
max-width: 50vw;
`;
const Four = styled.div`
display: flex;
max-width: 50vw;
`;

export default withAuthenticationRequired(Library, {
  onRedirecting: () => <Loading />,
});
