import React from "react";
import ReleaseDetail from "../components/ReleaseDetail";
//redux
import { useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

//Components
import Release from "../components/Release";

//styling
import styled from "styled-components";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

function ReleasesSmall(props) {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];



  const releaseInfo = useSelector((state) => state.releases.all);
  const labelInfo = useSelector((state) => state.releases.label);
const ordered = releaseInfo.sort((a, b) => b.year - a.year)

  return (
    <ReleasesList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <ReleaseDetail pathId={pathId} />}
        </AnimatePresence>
        <h3 style={{paddingBottom: "50px"}}>{labelInfo.name}</h3>
        <h4 style={{paddingBottom: "50px"}}>{labelInfo.profile}</h4>
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
                  image={release.thumb}
                  key={release.id}
                  catno={release.catno}
                />
              )
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
export default ReleasesSmall;
