import React from 'react'

export default class ToDosListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		};
	}

	renderTaskSection() {
		const { task, isCompleted } = this.props;

		const taskStyle = {
			color: isCompleted ? 'green' : 'black',
			cursor: 'pointer',
		};

		if (this.state.isEditing) {
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" defaultValue={task} ref="editeInput" />
					</form>
				</td>
			);
		}

		return(			
			<td style={taskStyle}
				onClick={this.props.toggleTask.bind(this, task)}
			>
				{task}
			</td>			
		);
	}

	renderActionSection() {
		if (this.state.isEditing) {
			return(
				<td>
					<button className="btn btn-success btn-sm"
							onClick={this.onSaveClick.bind(this)}>Save</button>
					<button className="btn btn-default btn-sm"
							onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>	
			);
		}

		return(			
			<td>
				<button className="btn btn-warning btn-sm"
						onClick={this.onEditClick.bind(this)}>Edit</button>
				<button className="btn btn-danger btn-sm" 
						onClick={this.props.deleteTask.bind(this, this.props.task)}
				>Delete</button>
			</td>			
		);
	}


	render(){
		return(
			
			<tr>
				{this.renderTaskSection()}
				{this.renderActionSection()}
			</tr>			
			
		);
	}

	onEditClick() {
		this.setState({ isEditing: true });
	}

	onCancelClick() {
		this.setState({ isEditing: false });
	}

	onSaveClick(event) {
		event.preventDefault();

		const oldTask = this.props.task;
		const newTask = this.refs.editeInput.value;
		this.props.saveTask(oldTask, newTask);
		this.setState({ isEditing: false });
	}

}