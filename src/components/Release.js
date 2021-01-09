import React from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {motion} from "framer-motion";
import {loadDetail} from "../actions/detailReleaseAction";
import {Link} from "react-router-dom";

function Release({name, format, released, image, id}) {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledRelease onClick={loadDetailHandler}>
      <Link to={`/release/${id}`}>
        <h3>{name}</h3>
        <h5>{format}</h5>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledRelease>
  );
}

const StyledRelease = styled(motion.div)`
  max-width: 25vh;

  min-height: 20vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
  }
`;

export default Release;
