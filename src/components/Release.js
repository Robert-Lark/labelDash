import React from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {motion} from "framer-motion";
import {loadDetail} from "../actions/detailReleaseAction";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import imageLoading from "../img/loading.jpeg";
function Release({name, image, id, artist, format}) {
  const detailsLoading = useSelector((state) => state.detail.detailsLoading);

  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));

  };
  return (
    <StyledRelease layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/release/${id}`}>
      {detailsLoading ? (
            <>
              <LoadingImage src={imageLoading} alt="loading" />
              <p>Loading</p>
            </>
          ) : (
        <motion.img src={image} alt={name} />
          )}
        {/* {format.includes("LP") ? <h5>LP</h5> : format.includes("CD") ? <h5>CD</h5> : format.includes("12") ? <h5>12"</h5> : format.includes("10") ? <h5>10"</h5> : format.includes("7") ? <h5>7"</h5> : format.includes("File") ? <h5>Digital</h5> : <h5></h5>} */}
        <StyledText>
        <motion.h5 >{artist}</motion.h5>
          <motion.h5 >{name}</motion.h5>
        </StyledText>
      </Link>
    </StyledRelease>
  );
}

const StyledRelease = styled(motion.div)`
  /* max-width: 25vh;
  min-height: 20vh; */
  width: 100%;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 10vh;
    object-fit: cover;
  }
`;

const StyledText = styled.div`
h5 {
  padding: 5px;
  color: black;
}
`
const LoadingImage = styled.img`
  width: 13vw;
  height: 20vh;
  transform: rotate(360deg);
`;
export default Release;
