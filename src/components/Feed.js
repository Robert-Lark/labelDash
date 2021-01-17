import React from "react";
import styled from "styled-components";
import ErasedTapesLogo from "../img/ErasedTapesLogo.png";
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
              title="titleProp"
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
            <div className="title">
              <h4>New Music Video</h4>
              <div className="description">
                <h5>
                  The First Music Video From The New Christian Loffler Album
                </h5>
              </div>
            </div>
            <div className="content">
              <iframe
              title="titleProp"
                width="auto"
                height="100%"
                src="https://www.youtube.com/embed/Qk_Dmv6ccsA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </NewRadioShow>
          <NewInterview>
            <div className="title">
              <h4>New Release</h4>
              <div className="description">
                <h5>A New Release From Nils Frahm Was Announced</h5>
              </div>
            </div>
            <div className="content">
              <div className="image">
                <img src={ErasedTapesLogo} alt="newRelease" />
              </div>
              <div className="releaseInfo">
                <h5>Nils Frahm</h5>
                <h5>Tripping With Nils Frahm</h5>
                <h5>Erased Tapes</h5>
              </div>
            </div>
          </NewInterview>
          <NewRelease>
            <div className="title">
              <h4>New Mix</h4>
              <div className="description">
                <h5>A New Mix From Max Cooper Was Just Uploaded</h5>
              </div>
            </div>
            <div className="content">
              {" "}
              <iframe
              title="titleProp"
                width="100%"
                height="auto"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956460496&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
              ></iframe>
            </div>
          </NewRelease>
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
    height: 100%;
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
  .title {
    text-align: center;
  }
  .description {
    margin: 0 10px;
    border-top: 1px solid black;
  }
  .content {
    height: auto;
  }
`;
const NewRadioShow = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  .title {
    text-align: center;
  }
  .description {
    margin: 0 10px;
    border-top: 1px solid black;
  }
  .content {
    text-align: center;
    height: 80%;
  }
`;
const NewInterview = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  .title {
    text-align: center;
  }
  .description {
    margin: 0 10px;
    border-top: 1px solid black;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 70%;
    }
  }
`;
// const NewMusicVideo = styled.div`
//   box-shadow: 0px 0px 10px 4px #e0e0e0;
//   border: 1px solid #daf1ff;
//   width: 100%;
//   display: flex;
//   /* flex-direction: column; */
//   align-items: center;
//   img {
//     border-radius: 20px;
//     max-width: 100%;
//     max-height: 100%;
//     cursor: pointer;
//     padding: 5px;
//   }
// `;
