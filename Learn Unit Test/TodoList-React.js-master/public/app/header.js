import React from 'react'

export default class Header extends React.Component {
	
	render(){
		return(
			
		      <div className="header clearfix">
		        <nav>
		          <ul className="nav nav-pills pull-right">
		            <li><a href="https://www.facebook.com/dmytro.kovalenko.1004" className="fa fa-facebook"></a></li>
		            <li><a href="http://www.linkedin.com/in/kovalenkodmytro" className="fa fa-linkedin"></a></li>
		          </ul>
		        </nav>
		        <h3 className="text-muted">Task Manager App with React.js</h3>
		      </div>
		);
	}
}