import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NotFound from 'components/Not Found';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      Todo Share UI
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
