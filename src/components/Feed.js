import React from "react";
import styled from "styled-components";
import Drastic from "../img/drasticSteps.png";
import Trippin from "../img/Tripping_with Nils_Frahm_Nils_Frahm.jpg";

const data = [
  {
    title: "New Radio show",
    description: "Our latest Radio Show Mixed By DJ DeepField",
    iFrame: (
      <iframe
        title="titleProp"
        width="100%"
        height="auto"
        scrolling="no"
        className="audio"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/929458261&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      ></iframe>
    ),
    img: "",
  },
  {
    title: "New Music Video",
    description: "The First Music Video From The New Christian Loffler Album",
    iFrame: (
      <iframe
        title="titleProp"
        width="auto"
        height="100%"
        className="video"
        src="https://www.youtube.com/embed/Qk_Dmv6ccsA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    ),
    img: "",
  },
  {
    title: "New Release",
    description: "A New Release From Nils Frahm Was Announced",
    iFrame: null,
    img: <img src={Trippin} alt="newRelease" />,
  },
  {
    title: "New Mix",
    description: "A New Mix From Max Cooper Was Just Uploaded",
    iFrame: (
      <iframe
        title="titleProp"
        width="100%"
        height="auto"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956460496&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      ></iframe>
    ),
    img: "",
  },
  {
    title: "New Interview",
    description: "A New Interview With Drastic Steps Was Just Published",
    iFrame: null,
    img: <img src={Drastic} alt="newRelease" />,
  },
];

function Feed(props) {
  return (
    <FeedContainer>
      <div className="headline">
        <h1>FEED</h1>
      </div>
      {data.map((data) => (
        <ContentContainer key={data.description}>
          <div className="title">
            <h4>{data.title}</h4>
          </div>
          <div className="description">
            <h5>{data.description}</h5>
          </div>
          <div className="content">{data.iFrame ? data.iFrame : data.img}</div>
        </ContentContainer>
      ))}
    </FeedContainer>
  );
}

export default Feed;

const FeedContainer = styled.div`
  margin-top: 50px;
  height: 90vh;
  padding: 0 30px 30px 30px;
  display: grid;
  grid-template-columns: 50vw;
  grid-template-rows: 10vh 1fr;
  gap: 10px;
  text-align: center;
  @media (max-width: 900px) {
    padding: 0 0 0 30px;
    grid-template-columns: 45vw;
    grid-template-rows: 5vh 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 55vw;
    grid-template-rows: 5vh 1fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 50vw;
    grid-template-rows: 5vh 1fr;
    margin-bottom: 70px;
  }
 
  h1 {
    font-size: 4rem;
    @media (max-width: 1400px) {
      font-size: 3.5rem;
      overflow: "hidden";
    }
    @media (max-width: 900px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
    @media (orientation: landscape) and (max-width: 900px) {
    margin-top: -25px;
    font-size: 2rem;
  }
  @media (orientation: landscape) and (max-width: 600px) {
    margin-top: 10px;
    font-size: 2rem;
  }
  }

  @media (orientation: landscape) and (max-width: 900px) {
    margin-top: 0px;
    width: 70vw;
    margin-bottom: 0px;
  }
  @media (orientation: landscape) and (max-width: 600px) {
    margin-top: 50px;
    height: 90vh;
    padding: 0 0 30px 0px;
    display: grid;
    grid-template-columns: 70vw;
    grid-template-rows: 10vh 1fr;
    gap: 10px;
    margin-bottom: 70px;
  }
  .headline {
    height: 15vh;
    @media (max-width: 900px) {
      padding-top: 30px;

    }
    @media (max-width: 600px) {
      height: 30vh;

    }
    @media (max-width: 400px) {
     padding-top: 20px;

    }

  @media (orientation: landscape) and (max-width: 600px) {
    padding-top: 5px;
  }

  }
  
`;
const ContentContainer = styled.div`
  overflow: visible;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  display: grid;
  grid-template-columns: 40vw;
  grid-template-rows: 80px 40px 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 1400px) {
    font-size: 2.5rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 40vw;
    margin-top: 50px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 50vw;
    margin-top: 50px;
  }

  @media (orientation: landscape) and (max-width: 600px) {
    display: grid;
    grid-template-columns: 60vw;
    grid-template-rows: 40px 1px 1fr;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: 50vw;
    grid-template-rows: 40px 1px 1fr;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    .description{
        padding: 15px;
    }
  }
  h4 {
    padding: 10px 0;
    font-size: 3rem;
    @media (max-width: 1400px) {
      font-size: 2.5rem;
    }
    @media (max-width: 900px) {
      font-size: 2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
    @media (orientation: landscape) and (max-width: 600px) {
      font-size: 1rem;
    }
    @media (max-width: 400px) {
        font-size: 1rem;
   
  }
  }
  h5 {
    border-top: 1px solid black;
    font-size: 2rem;
    padding: 10px 0;
    @media (max-width: 1400px) {
      font-size: 1.5rem;
    }
    @media (max-width: 900px) {
      font-size: 1rem;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
    }
    @media (orientation: landscape) and (max-width: 600px) {
      font-size: 0.5rem;
    }
    @media (max-width: 400px) {
        font-size: 0.5rem;
  }
  }
  .content {
    display: flex;
    justify-content: center;
    @media (max-width: 1400px) {
      width: 40vw;
    }
    @media (max-width: 600px) {
        width: 50vw;
  }
  @media (max-width: 400px) {
    width: 50vw;
  }
    @media (orientation: landscape) and (max-width: 600px) {
      width: 60vw;
    }
  }
  img {
    width: 50%;
    padding: 10px 0;
    @media (max-width: 600px) {
        width: 50vw;
  
  }
  @media (max-width: 400px) {
    width: 30vw;
    height: 20vh;
  }
  }
  .audio {
    width: 100%;
    height: 40vh;
    padding: 10px 0;
    @media (min-width: 2500px) {
      height: 15vh;
    }
    @media (min-width: 1800px) {
      height: 25vh;
    }
    @media (max-width: 1400px) {
      height: 18vh;
    }
    @media (max-width: 900px) {
      height: 15vh;
    }
    @media (max-width: 600px) {
        height: 25vh;
    }
    @media (orientation: landscape) and (max-width: 600px) {
      height: 50vh;
    }
    @media (max-width: 400px) {
        height: 25vh;
   
  }
  }
  .video {
    width: 100%;
    height: 40vh;
    padding: 10px 0;
    @media (min-width: 1800px) {
      height: 40vh;
    }
    @media (max-width: 1400px) {
      height: 40vh;
    }
    @media (max-width: 900px) {
      height: 25vh;
    }
    @media (max-width: 600px) {
      font-size: 2.5rem;
      padding: 10px;
    }
    @media (orientation: landscape) and (max-width: 600px) {
      height: 80vh;
    }
  }
`;
