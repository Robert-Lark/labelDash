import React from "react";
import GlobalStyles from './components/GlobalStyles'

import {Route} from 'react-router-dom'
import Releases from './pages/Releases'
function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Route path={["/release/id", "/"]}></Route>
<Releases/>

    </div>
  );
}

export default App;
