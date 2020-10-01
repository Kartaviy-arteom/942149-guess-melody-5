import React from "react";
import WelcomePage from "../welcome-page/welcome-page";
import PropTypes from "prop-types";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomePage errorsCount = {errorsCount} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
