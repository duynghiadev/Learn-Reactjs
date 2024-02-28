import PropTypes from 'prop-types'
import TodoList from './components/TodoList/TodoList'
import { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'

const TodoFeature = (props) => {
  const match = useRouteMatch()

  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  )
}

TodoFeature.propTypes = {}

export default TodoFeature
