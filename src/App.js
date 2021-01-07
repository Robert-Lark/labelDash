import React from "react";
import GlobalStyles from './components/GlobalStyles'
//import Home from "./pages/Home";
import Releases from './pages/Releases'
function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
<Releases/>
      {/* <Home /> */}
    </div>
  );
}

export default App;
