import React from "react";
import GlobalStyles from './components/GlobalStyles'
import Home from "./pages/Home";
import {Route} from 'react-router-dom'
// import Releases from './pages/Releases'
function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Route path={["/game/id", "/"]}></Route>
{/* <Releases/> */}
      <Home />
    </div>
  );
}

export default App;
