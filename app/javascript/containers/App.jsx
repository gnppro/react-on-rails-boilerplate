import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store/create';

const Hello = ({ name }) => (
  <div>
    Hello
    {' '}
    {name}
    !
  </div>
);

Hello.defaultProps = {
  name: 'Gerardo',
};

Hello.propTypes = {
  name: PropTypes.string,
};

const App = () => (
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

export default App;
