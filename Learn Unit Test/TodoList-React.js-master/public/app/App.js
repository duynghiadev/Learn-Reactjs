import React, { Component } from 'react'
import ReactDom from 'react-dom'

import CreateToDo from './create-todo'
import ToDosList from './todos-list'
import Header from './header'
import Footer from './footer'


const todos = [
{
	task: "Download this app",
	isCompleted: true
},
{
	task: "Run this app",
	isCompleted: true
},
{
	task: "Tell to Dima that this is a cool app",
	isCompleted: false
},
{
	task: "Try to find some bugs",
	isCompleted: false
},
{
	task: "Report bugs to Dima if there will be some",
	isCompleted: false
}
]

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}


	render(){
		return(
			<div>
				<Header />
				<CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)} />
				<ToDosList 
					todos={this.state.todos} 
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
				<Footer />
			</div>
		)
	}

	toggleTask(task) {
		const foundToDo = _.find(this.state.todos, todo => todo.task === task);
		foundToDo.isCompleted = !foundToDo.isCompleted;
		this.setState({ todos: this.state.todos });
	}

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({
			todos:this.state.todos
		});
	}

	saveTask(oldTask, newTask) {
		const foundToDo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundToDo.task = newTask;
		this.setState({ todos: this.state.todos });
	}

	deleteTask(taskToDelete){
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({ todos: this.state.todos });
	}
}

ReactDom.render(<App />, document.getElementById('app'))