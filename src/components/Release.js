import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";


function Release({name, format, released, image}) {
  return (
    <StyledRelease>
      <h3>{name}</h3>
      <h5>{format}</h5>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledRelease>
  );
}

const StyledRelease = styled(motion.div)`
max-width: 20vh;

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
