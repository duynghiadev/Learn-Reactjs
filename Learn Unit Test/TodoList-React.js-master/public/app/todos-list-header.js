import React from 'react'

export default class ToDosListHeader extends React.Component {
	
	render(){
		return(
			
			<thead>
				<tr>
					<th className="col-lg-8">Task</th>
					<th className="col-lg-4">Options</th>
				</tr>
			</thead>
			
		);
	}
}