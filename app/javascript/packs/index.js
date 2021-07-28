import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'Gerardo'
}

Hello.propTypes = {
  name: PropTypes.string
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Hello name="react + router" />
        </Route>
      </Switch>
    </Router>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.body.appendChild(document.createElement("div"))
  );
});
