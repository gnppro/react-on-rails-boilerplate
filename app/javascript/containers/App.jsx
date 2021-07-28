import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, ReactReduxContext } from "react-redux";
import PropTypes from "prop-types";
import store from '../store/create';

const Hello = (props) => <div>Hello {props.name}!</div>;

Hello.defaultProps = {
  name: "Gerardo",
};

Hello.propTypes = {
  name: PropTypes.string,
};

const App = () => {
  return (
    <Provider store={store} context={ReactReduxContext}>
      <Router>
        <Switch>
          <Route path="/">
            <Hello name="react + router + redux" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
