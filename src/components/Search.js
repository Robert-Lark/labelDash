import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import Release from "./Release";
const Search = () => {
  const inputHandler = (e) => {
    setSearchInput(e);
  };
  const [searchInput, setSearchInput] = useState();
  const releaseInfo = useSelector((state) => state.releases.all);

  return (
    <StyledSearch>
      <div className="Search">
        <input
          type="text"
          key="searchBar"
          placeholder={"search titles"}
          onChange={(e) => inputHandler(e.target.value)}
        />
        <button>Search</button>
        {searchInput &&
          releaseInfo.map((release) => {
            if (release.title.toLowerCase().includes(searchInput.toLowerCase())) {
              return (
                <SearchResults>
                  <Release
                    name={release.title}
                    format={release.format}
                    released={release.year}
                    artist={release.artist}
                    id={release.id}
                    master={release.resource_url}
                    image={release.thumb}
                    key={release.id}
                    catno={release.catno}
                  />
                </SearchResults>
              );
            } if (release.artist.toLowerCase().includes(searchInput.toLowerCase())) {
                return (
                  <SearchResults>
                    <Release
                      name={release.title}
                      format={release.format}
                      released={release.year}
                      artist={release.artist}
                      id={release.id}
                      master={release.resource_url}
                      image={release.thumb}
                      key={release.id}
                      catno={release.catno}
                    />
                  </SearchResults>
                );
              } else  return (<></>)
          } )}

      </div>
    </StyledSearch>
  );
};

const StyledSearch = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30vw;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 0.5px solid black;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    @media (max-width: 1400px) {
      font-size: 1rem;
      width: 15vw;
  }
  @media (max-width: 600px) {
    font-size: .5rem;
    width: 30vw;
  }
  @media (orientation: landscape) and (max-width: 900px) {
    font-size: .5rem;
    width: 50vw;
  }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    @media (max-width: 1400px) {
      font-size: 1rem;
      width: 45%;
  }
  @media (max-width: 600px) {
display: none;
  }
  @media (orientation: landscape) and (max-width: 900px) {
    display: none;
  }
  }
  @media (max-width: 1400px) {
    padding: 0 0 10px 0;
  }

`;
const SearchResults = styled(motion.div)`
  padding: 40px;
  @media (max-width: 1400px) {
    padding: 15px 15px 5px 15px;
   
  }
`;

export default Search;
