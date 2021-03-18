import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";


function App() {
  return (
    <Router>

        <Switch>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
