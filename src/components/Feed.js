import React from "react";
import styled from "styled-components";
import Drastic from "../img/drasticSteps.png";
import Trippin from "../img/Tripping_with Nils_Frahm_Nils_Frahm.jpg";
function Feed(props) {
  return (
    <div>
      <BodyContainer>
        <FeedContainer>
          <h1>FEED</h1>
          <Soundcloud>
            <div className="title">
              <h4>New Radio show</h4>
              <div className="description">
                <h5>Our latest Radio Show Mixed By DJ DeepField</h5>
              </div>
            </div>
            <iframe
              title="titleProp"
              width="100%"
              height="auto"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335497700&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
            ></iframe>
          </Soundcloud>
          <Youtube>
            <div className="title">
              <h4>New Music Video</h4>
              <div className="description">
                <h5>
                  The First Music Video From The New Christian Loffler Album
                </h5>
              </div>
            </div>

            <iframe
              title="titleProp"
              width="auto"
              height="100%"
              src="https://www.youtube.com/embed/Qk_Dmv6ccsA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Youtube>

          <Images>
            <div className="title">
              <h4>New Release</h4>
              <div className="description">
                <h5>A New Release From Nils Frahm Was Announced</h5>
              </div>
            </div>
            <div className="content">
              <div className="image">
                <img src={Trippin} alt="newRelease" />
              </div>
              <div className="releaseInfo">
                <h5>Nils Frahm</h5>
                <h5>Tripping With Nils Frahm</h5>
                <h5>Erased Tapes</h5>
              </div>
            </div>
          </Images>

          <Soundcloud>
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
          </Soundcloud>
          <Images>
            <div className="title">
              <h4>New Release</h4>
              <div className="description">
                <h5>A New Release From Nils Frahm Was Announced</h5>
              </div>
            </div>
            <div className="content">
              <div className="image">
                <img src={Drastic} alt="newRelease" />
              </div>
              <div className="releaseInfo">
                <h5>
                  We are thrilled to host Syracuse NY based sound-sculptor
                  Drastic Steps for the tenth edition of our Quiet Cast series.
                  We have had the privilege of working with this artist for a
                  few years now & can say without a doubt his ear is tuned to
                  the right frequencies.{" "}
                </h5>
              </div>
            </div>
          </Images>
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
  @media (max-width: 1400px) {
    h1 {
      margin: 20px 0 80px 0;
      padding: 5px;
      font-size: 3rem;
    }
  }
`;
const Soundcloud = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  .title {
    font-size: 1.5rem;
    text-align: center;
  }
  .description {
    margin: 0 10px;
    border-top: 1px solid black;
  }
  @media (max-width: 1400px) {
    height: 33vh;
    .description {
      margin: 10px 10px;
      border-top: 1px solid black;
      overflow: hidden;
    }
    iframe {
      padding: 20px;
    }
  }
`;
const Youtube = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  .title {
    font-size: 1.5rem;
    text-align: center;
  }
  .description {
    margin: 0 10px;
    border-top: 1px solid black;
  }
  @media (max-width: 1400px) {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      height: 20%;
    }
    .description {
      margin: 0 10px;
      border-top: 1px solid black;
    }
    iframe {
      width: 100%;
      padding: 20px;
    }
  }
`;
const Images = styled.div`
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
      width: 60%;
    }
  }
  @media (max-width: 1400px) {
    height: 38vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    .title {
      font-size: 1.5rem;
      text-align: center;
      overflow: hidden;
    }
    .description {
      margin: 0 10px;
      border-top: 1px solid black;
    }
    .content {
      display: grid;
      grid-template-columns: 300px 1fr;
      .image {
        width: 100%;
        padding: 20px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .releaseInfo {
        h5 {
          font-size: 1rem;
        }
      }
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
