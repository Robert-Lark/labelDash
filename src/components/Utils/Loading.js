import React from "react";
import styled from "styled-components";
import loadingImg from "../../img/loading.jpeg";

const Loading = () => (
  <div
    style={{display: "flex", flexDirection: "column", alignItems: "center"}}
  >
    <LoadingImage src={loadingImg} alt="Loading..." />
    <p>Loading</p>
  </div>
);

const LoadingImage = styled.img`
  width: 13vw;
  height: 18vh;
  transform: rotate(360deg);
  @media (max-width: 600px) {
    width: 40vw;
  }
`;

export default Loading;
