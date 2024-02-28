import PropTypes from 'prop-types'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'
import NotFound from '../../components/NotFound'

const TodoFeature = (props) => {
  const match = useRouteMatch()

  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

TodoFeature.propTypes = {}

export default TodoFeature
