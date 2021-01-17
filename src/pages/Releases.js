import React from "react";
import ReleaseDetail from "../components/ReleaseDetail";
//redux
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

//Components
import Release from "../components/Release";
import imageLoading from "../img/loading.jpeg";
import Search from '../components/Search'
//styling
import styled from "styled-components";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

function ReleasesSmall({loading}) {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const releaseInfo = useSelector((state) => state.releases.all);
  const labelInfo = useSelector((state) => state.releases.label);
  const ordered = releaseInfo.sort((a, b) => b.year - a.year);

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
          {loading ? (
            <>
              <LoadingImage src={imageLoading} alt="loading" />
              <p>Loading</p>
            </>
          ) : (
            <img
              src={labelInfo.images[0].resource_url}
              style={{paddingBottom: "50px", width: "20vw"}}
              alt={labelInfo.name}
            />
          )}
          {/* <img src={labelInfo.images[0].resource_url}style={{paddingBottom: "50px", width: "20vw"}} alt={labelInfo.name}/> */}
          <h4 style={{paddingBottom: "50px"}}>{labelInfo.profile}</h4>
          <Search loading={loading}/>
        </div>
        <IndividualRelease>
          {/* eslint-disable-next-line */}
          {ordered.map((release) => {
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
          })}
        </IndividualRelease>
      </AnimateSharedLayout>
    </ReleasesList>
  );
}

const ReleasesList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;
const IndividualRelease = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

const LoadingImage = styled.img`
  width: 13vw;
  height: 20vh;
  transform: rotate(360deg);
`;
export default ReleasesSmall;
