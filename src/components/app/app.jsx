import React from "react";
import WelcomePage from "../welcome-page/welcome-page";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ArtistQuestion from "../artist-question/artist-question";
import GenreScreen from "../genre-screen/genre-screen";
import LoginScreen from "../login-screen/login-screen";
import SuccessScreen from "../success-screen/success-screen";
import FailScreen from "../fail-screen/fail-screen";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/dev-artist" >
          <ArtistQuestion />
        </Route>
        <Route exact path ="/dev-genre" >
          <GenreScreen />
        </Route>
        <Route exact path ="/login" >
          <LoginScreen />
        </Route>
        <Route exact path ="/result" >
          <SuccessScreen />
        </Route>
        <Route exact path ="/lose" >
          <FailScreen />
        </Route>
        <Route>
          <WelcomePage errorsCount = {errorsCount} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
