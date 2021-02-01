import React from "react";
import styled from "styled-components";
import ProfileSection from "../UserComponents/ProfileSection";
import ListenNext from "../UserComponents/ListenNext";
import TopTen from "../UserComponents/TopTen";
import NextShipment from "../UserComponents/NextShipment";
import InLibrary from "../UserComponents/InLibrary";

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
    </Container>
  );
};
const Container = styled.div`
  max-width: 53vw;
  max-height: 80vh;
  display: grid;
  grid-template-rows: 3fr 1fr 5fr;
  gap: 4vh;
`;
const One = styled.div`
  max-width: 50vw;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const Two = styled.div`
  display: flex;
  max-width: 50vw;
`;
const Three = styled.div`
  max-width: 50vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;
`;

export default Library;
