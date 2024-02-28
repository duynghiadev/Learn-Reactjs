import PropTypes from 'prop-types'
import { useEffect, useMemo, useState } from 'react'
import TodoList from '../../components/TodoList/TodoList'
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom'
import queryString from 'query-string'

const ListPage = (props) => {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Code',
      status: 'new'
    }
  ]

  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  const [todoList, setTodoList] = useState(initTodoList)
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search)
    console.log(params)

    return params.status || 'all'
  })

  useEffect(() => {
    const params = queryString.parse(location.search)
    console.log('params:', params)
    setFilteredStatus(params.status || 'all')
  }, [location.search])

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx)

    // clone current array to the new one
    const newTodoList = [...todoList]

    // toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
    }
    newTodoList[idx] = newTodo

    // update todo list
    setTodoList(newTodoList)
  }

  const handleShowAllClick = () => {
    // setFilteredStatus('all')
    const queryParams = { status: 'all' }
    history.push({
      pathname: match.patch,
      search: queryString.stringify(queryParams)
    })
  }

  const handleShowCompletedClick = () => {
    // setFilteredStatus('completed')
    const queryParams = { status: 'completed' }
    history.push({
      pathname: match.patch,
      search: queryString.stringify(queryParams)
    })
  }

  const handleShowNewClick = () => {
    // setFilteredStatus('new')
    const queryParams = { status: 'new' }
    history.push({
      pathname: match.patch,
      search: queryString.stringify(queryParams)
    })
  }

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status)
  })
  console.log(renderedTodoList)

  return (
    <div>
      <h3>To Do List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  )
}

ListPage.propTypes = {}

export default ListPage
