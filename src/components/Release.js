import React from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {motion} from "framer-motion";
import {loadDetail} from "../actions/detailReleaseAction";
import {Link} from "react-router-dom";

function Release({name, format, released, image, id}) {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledRelease layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/release/${id}`}>
        <StyledText>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <motion.h5 layoutId={`title ${stringPathId}`}>{format}</motion.h5>
        <motion.p layoutId={`title ${stringPathId}`}>{released}</motion.p>
        </StyledText>
        <img src={image} alt={name} />
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
    height: 20vh;
    object-fit: cover;
  }
`;
const StyledText = styled.div`

`
export default Release;
