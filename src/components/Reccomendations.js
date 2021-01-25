import React from "react";
import Release from "./Release";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import imageLoading from "../img/loading.jpeg";
import ReleaseDetail from "./ReleaseDetail";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

function Reccomendations() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const detailsLoading = useSelector((state) => state.detail.isLoading);
  const data = useSelector((state) => state.detail.reccomendedData);
  console.log(data);
  return (
    <ReleasesList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <ReleaseDetail pathId={pathId} />}
        </AnimatePresence>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {detailsLoading ? (
            <>
              <LoadingImage src={imageLoading} alt="loading" />
              <p>Loading</p>
            </>
          ) : (
            <>
              <h2>Reccomended Titles</h2>
              <p>
                Unfamiliar with the labels we love? Here are a few titles
                selected from each imprint to give you a great place to start.
              </p>
            </>
          )}
        </div>
        {detailsLoading ? (
          <></>
        ) : (
          <>
            {" "}
            <h1>Denovali Records</h1>
            <IndividualRelease>
              {data.map((release) => {
                if (release.labels[0].name === "Denovali Records") {
                  return (
                    <Release
                      name={release.title}
                      format={release.format}
                      released={release.year}
                      artist={release.artist}
                      id={release.id}
                      master={release.resource_url}
                      image={release.thumb}
                      key={release.id}
                      catno={release.catno}
                    />
                  );
                } else {
                  return null
                }
              })}
            </IndividualRelease>
            <br></br>
            <h1>Erased Tapes Records</h1>
            <IndividualRelease>
              {data.map((release) => {
                if (release.labels[0].name === "Erased Tapes Records") {
                  return (
                    <Release
                      name={release.title}
                      format={release.format}
                      released={release.year}
                      artist={release.artist}
                      id={release.id}
                      master={release.resource_url}
                      image={release.thumb}
                      key={release.id}
                      catno={release.catno}
                    />
                  );
                } else {
                  return null
                }
              })}
            </IndividualRelease>
            <br></br>
            <h1>Ki Records</h1>
            <IndividualRelease>
              {data.map((release) => {
                if (release.labels[0].name === "Ki Records (2)") {
                  return (
                    <Release
                      name={release.title}
                      format={release.format}
                      released={release.year}
                      artist={release.artist}
                      id={release.id}
                      master={release.resource_url}
                      image={release.thumb}
                      key={release.id}
                      catno={release.catno}
                    />
                  );
                } else {
                  return null
                }
              })}
            </IndividualRelease>
            <br></br>
            <h1>Miasmah</h1>
            <IndividualRelease>
              {data.map((release) => {
                if (release.labels[0].name === "Miasmah") {
                  return (
                    <Release
                      name={release.title}
                      format={release.format}
                      released={release.year}
                      artist={release.artist}
                      id={release.id}
                      master={release.resource_url}
                      image={release.thumb}
                      key={release.id}
                      catno={release.catno}
                    />
                  );
                } else {
                  return null
                }
              })}
            </IndividualRelease>
            <br></br>
            <h1>Sonic Pieces</h1>
            <IndividualRelease>
              {data.map((release) => {
                if (release.labels[0].name === "Sonic Pieces") {
                  return (
                    <Release
                      name={release.title}
                      format={release.format}
                      released={release.year}
                      artist={release.artist}
                      id={release.id}
                      master={release.resource_url}
                      image={release.thumb}
                      key={release.id}
                      catno={release.catno}
                    />
                  );
                } else {
                  return null
                }
              })}
            </IndividualRelease>
          </>
        )}
      </AnimateSharedLayout>
    </ReleasesList>
  );
}

const ReleasesList = styled(motion.div)`
  padding: 0rem 5rem;
  height: 90vh;
  h2 {
    padding: 5rem 0rem;
  }
  h4 {
    padding-bottom: "50px";
  }
  .labelLogo {
    padding-bottom: 50px;
    width: 20vw;
    @media (max-width: 1400px) {
      padding-bottom: 30px;
    }
  }
  @media (max-width: 1400px) {
    padding: 0;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
`;

const IndividualRelease = styled(motion.div)`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 1400px) {
    padding: 15px;
  }
`;
const LoadingImage = styled.img`
  width: 13vw;
  height: 20vh;
  transform: rotate(360deg);
`;
export default Reccomendations;
