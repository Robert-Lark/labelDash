import React from "react";
import styled from "styled-components";

function Feed(props) {
  return (
    <div>
      <BodyContainer>
        <FeedContainer>
          <h1>FEED</h1>
          <NewRelease>
            <div className="title">
              <h4>New Radio show</h4>
              <div className="description">
                <h5>Our latest Radio Show Mixed By DJ DeepField</h5>
              </div>
            </div>
            <div className="content">
              {" "}
              <iframe
                width="100%"
                height="auto"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335497700&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
              ></iframe>
            </div>
          </NewRelease>
          <NewRadioShow>
            <h3>Request A Title</h3>
          </NewRadioShow>
          <NewInterview>
            <h3>Reccomendations</h3>
          </NewInterview>
          <NewMusicVideo>
            <h3>Your Collection</h3>
          </NewMusicVideo>
        </FeedContainer>
      </BodyContainer>
    </div>
  );
}

export default Feed;

const BodyContainer = styled.div`
  margin-top: 15%;
`;

const FeedContainer = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  height: 95vh;
  width: 50vw;
  padding: 30px;
  display: grid;
  gap: 10px;
  h1 {
    height: 50%;
    text-align: center;
  }
`;
const NewRelease = styled.div`
border-radius: 10px;
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  .title{
      text-align: center;
  }
  .description{
      margin: 0 10px; 
      border-top: 1px solid black;
      margin-bottom: -20px;
  }
  .content{
      height: 80%;
  }
`;
const NewRadioShow = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;
const NewInterview = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  img {
    border-radius: 20px;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
    padding: 5px;
  }
`;
const NewMusicVideo = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  img {
    border-radius: 20px;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
    padding: 5px;
  }
`;
