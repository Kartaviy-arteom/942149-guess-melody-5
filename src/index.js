import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import questions from "./mocks/questions";

const ERROR_COUNT = 3;

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <App errorsCount = {ERROR_COUNT} questions = {questions} />,
    rootElement
);
