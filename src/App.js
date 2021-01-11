import React from "react";
import GlobalStyles from './components/GlobalStyles'

import {Route} from 'react-router-dom'

import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Route path={["/release/id", "/"]}></Route>
<Dashboard/>

    </div>
  );
}

export default App;
