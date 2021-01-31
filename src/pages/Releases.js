import React from "react";

//redux
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

//Components
import Release from "../components/Release";
import Search from "../components/Search";
import Loading from "../components/Loading";
import ReleaseDetail from "../components/ReleaseDetail";

//styling
import styled from "styled-components";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

function ReleasesSmall() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const {all, loading} = useSelector((state) => state.releases);
  const labelInfo = useSelector((state) => state.releases.label);

  return all === 0 ? (
    <Loading />
  ) : (
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
              <Loading />
            </>
          ) : (
            <img
              src={labelInfo.images[0].resource_url}
              className="labelLogo"
              alt={labelInfo.name}
            />
          )}
          <h4>{labelInfo.profile}</h4>
          <Search loading={loading} />
        </div>
        <IndividualRelease>
          {/* eslint-disable-next-line */}
          {all.map((release) => {
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
  max-height: 80vh;

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
  min-height: 80vh;
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

export default ReleasesSmall;
