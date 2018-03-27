import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import { ThemeProvider } from "styled-components";
import Presentation from "./presentation";
import { default as theme } from "./assets/theme";

const CustomErrorReporter = ({ error }) => <Redbox error={ error } />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <ThemeProvider theme={theme}>
      <Presentation />
    </ThemeProvider>
  </AppContainer>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept("./presentation", () => {
    const NextPresentation = require("./presentation").default;    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <ThemeProvider theme={theme}>
          <NextPresentation />
        </ThemeProvider>
      </AppContainer>,
      document.getElementById("root"),
    );
  });
}
