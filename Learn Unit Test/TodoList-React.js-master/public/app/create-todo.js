import React from 'react'

export default class ToDosList extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			error: null
		}
	}

	renderError() {
		if (!this.state.error) { return null; }

		return <div style={{ color : 'red' }}>{this.state.error}</div>
	}


	render(){
		return(
			<div className="jumbotron">
        		<h1>Manage your Tasks!</h1>
        		<p className="lead">This application helps you to manage your task. 
        		You can create new tasks in the input area and then delete and modify them in the table below. 
        		Also you can mark your task as completed by clicking on it. 
        		You cannot create empty tasks and also tasks that already exist. </p>

        		<p>Hope you will like it and good luck with your tasks! :)</p>
        		
        		<form onSubmit={this.handleCreate.bind(this)}>
					<input type="text" placeholder="What do I need to do?" ref="createInput" />
					<button id="create-button" className="btn btn-md btn-primary">Create</button>
					{this.renderError()}
				</form>

      		</div>			
		);
	}

	handleCreate(event) {
		event.preventDefault();

		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);

		if (validateInput) {
			this.setState({ error: validateInput });
			return
		}

		this.setState({ error: null });
		this.props.createTask(task);
		this.refs.createInput.value = '';		
	}

	validateInput(task) {
		if (!task) {
			return 'Your task is empty. Please enter a valid task!';
		} else if (_.find(this.props.todos, todo => todo.task === task)) {
			return 'This task already exists. Create another one please!';
		} else {
			return null;
		}
	}
}