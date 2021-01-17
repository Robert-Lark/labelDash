import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
// import {formatDetailsURL} from "../APIs/discogs";
import ReactPlayer from "react-player/youtube";

function ReleaseDetail({pathId}) {
  const history = useHistory();
  const {detail, isLoading} = useSelector((state) => state.detail);
  const masterInfo = useSelector((state) => state.detail.format);

  console.log(detail, masterInfo);

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
          <Detail layoutId={pathId}>
            <Stats>
              <div>
                <h1>{detail.artists_sort}</h1>
                <h3>{detail.title}</h3>
                {detail.labels &&
                detail.labels.map((label) => (
                  <h3>{label.name}</h3>
                ))}
                <h5>{detail.released}</h5>
                {detail.styles.map((genre) => (
                  <h5>{genre}</h5>
                ))}
                <Button>LP</Button>
                <Button>Limited</Button>
                <Button>CD</Button>
              </div>
              <CoverArt>
                <img src={detail.images[0].resource_url} alt="cover"/>
              </CoverArt>
              <Info>
                <h3>Tracklist</h3>
                <Tracklist>
                  {detail.tracklist.map((track) => (
                    <p>
                      {track.position}: {track.title}
                    </p>
                  ))}
                </Tracklist>
              </Info>
            </Stats>
            <Description>
              <p>{detail.notes}</p>
            </Description>
            <Gallery>
              {detail.videos &&
                detail.videos.map((video) => (
                  <>
                    <h3>{video.title}</h3>
                    <ReactPlayer url={video.uri} />
                  </>
                ))}
            </Gallery>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Return to the top
              </Button>
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
  display: grid;
  width: 80%;
  margin-top: 20px;
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
  h5 {
    font-weight: lighter;
  }
  display: flex;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Tracklist = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
// const Media = styled(motion.div)`
//   margin-top: 5rem;
//   img {
//     width: 100%;
//     height: 60vh;
//     object-fit: cover;
//   }
// `;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
const Gallery = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background: transparent;
  cursor: pointer;
  border: 2px solid rgb(65, 65, 65);
  padding: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }
`;
const CoverArt = styled.div`
  width: 39vw;
  padding: 0px 20px;
  img {
    box-shadow: 0px 0px 10px 4px #e0e0e0;
    border: 1px solid #daf1ff;
  }
`;

export default ReleaseDetail;


             /* {detail.videos &&
                detail.videos.map(async (video) => {
                  var thumb = YoutubeThumb.thumb(video.uri, 'small');
                  const res = await axios.get(thumb, {responseType: "arraybuffer"})
                  const thumbData = res.data;
                  // const brokenThumbData = PNG.sync.read(fs.readFileSync('../img/brokenYoutubeURL.png'));
                  // console.log(brokenThumbData);
return(
                  <>
                    <h3>{video.title}</h3>
                    <ReactPlayer url={video.uri} />
                  </>)
                })} */