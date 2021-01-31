import React from "react";
import GlobalStyles from './components/GlobalStyles'

import {Route} from 'react-router-dom'

import DashboardCopy from "./pages/DashboardCopy";
function App() {
  return (
    <div style={{maxHeight:"99vh"}}>
      <GlobalStyles></GlobalStyles>
      <Route path={["/release/id", "/"]}></Route>
<DashboardCopy/>

    </div>
  );
}

export default App;
