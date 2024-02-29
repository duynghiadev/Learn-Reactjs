import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search)
        return params.status || 'all';
    });
    useEffect(() => {
        const params = queryString.parse(location.search)
        return setFilteredStatus(params.status || 'all');
    },[location.search])
    const handleTodoList = (todo, index) => {
        // clone current array to the new one
        const newTodoList = [...todoList];
        // toggle state
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'completed' ? 'new' : 'completed',
        }
        newTodoList[index] = newTodo;
        //update todoList
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        // setFilteredStatus('all');
        const queryParams = {status: 'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });

    }
    const handleShowCompletedClick = () => {
        // setFilteredStatus('completed');
        const queryParams = {status: 'completed'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }
    const handleShowNewClick = () => {
        // setFilteredStatus('new');
        const queryParams = {status: 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const renderedTodoList = useMemo(() => {
             return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    },[todoList, filteredStatus]);
    
    const handleTodoFormSubmit = (values) => {
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
            <h3>TodoList</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList}></TodoList>
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}

export default ListPage;