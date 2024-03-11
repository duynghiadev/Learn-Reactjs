import { Box } from '@material-ui/core'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import DetailPage from './pages/DetailPage.jsx'
import ListPage from './pages/ListPage.jsx'

function ProductFeature(props) {
  const match = useRouteMatch()

  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  )
}

export default ProductFeature
