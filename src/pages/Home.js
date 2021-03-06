import React, {useEffect} from "react";
import GameDetail from '../components/GameDetail'
//redux
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesActions";
import {useLocation} from 'react-router-dom'


//Components
import Game from "../components/Game";

//styling
import styled from "styled-components";
import {motion} from "framer-motion";


function Home(props) {
  const location = useLocation()
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  
  const {popular, newGames, upcoming} = useSelector((state) => state.games);

  return (
    <GameList>
      {pathId && <GameDetail/>}
      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Popular games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
`;
export default Home;
