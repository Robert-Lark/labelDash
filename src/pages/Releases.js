import React, {useEffect} from "react";
import ReleaseDetail from "../components/ReleaseDetail";
//redux
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {loadReleases} from "../actions/releasesActions";

//Components
import Release from "../components/Release";

//styling
import styled from "styled-components";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

function Home(props) {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadReleases());
  }, [dispatch]);

  const releaseInfo = useSelector((state) => state.releases.all);
const reg = new RegExp("File")
  return (
    <ReleasesList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <ReleaseDetail pathId={pathId} />}
        </AnimatePresence>
        <h2>Denovali</h2>
        <IndividualRelease>
          {/* eslint-disable-next-line */}
          {releaseInfo.map((release) => {
            if (!reg.test(release.format))
              return (
                <Release
                  name={release.title}
                  format={release.format}
                  artist={release.artist}
                  released={release.year}
                  id={release.id}
                  image={release.thumb}
                  key={release.id}
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
`;
export default Home;
