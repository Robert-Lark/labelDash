import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

function ReleaseDetail(props) {
  const history = useHistory();
  const {detail, isLoading} = useSelector(
    (state) => state.detail
  );
  console.log(detail)
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h2>{detail.artists_sort}</h2>
               <h3>{detail.title}</h3>
               {/*   <p>Rating: {detail.rating}</p> */}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {/* {detail.platforms &&
                    detail.platforms.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
                    ))} */}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              {/* <img src={detail.background_image} alt="detail" /> */}
            </Media>
            <Description>
              {/* <p>{detail.description_raw}</p> */}
            </Description>
            <div className="gallery">
              {/* {detailScreenshots &&
                detailScreenshots.results.map((screen) => (
                  <img key={screen.id} src={screen.image} alt="detail" />
                ))} */}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default ReleaseDetail;
