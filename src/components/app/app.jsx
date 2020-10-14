import React from "react";
import WelcomePage from "../welcome-page/welcome-page";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ArtistQuestion from "../artist-question/artist-question";
import GenreScreen from "../genre-screen/genre-screen";
import LoginScreen from "../login-screen/login-screen";
import SuccessScreen from "../success-screen/success-screen";
import FailScreen from "../fail-screen/fail-screen";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/dev-artist" >
          <ArtistQuestion
            question={secondQuestion}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path ="/dev-genre" >
          <GenreScreen
            question={firstQuestion}
            onAnswer={() => {}}
          />
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
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomePage
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
