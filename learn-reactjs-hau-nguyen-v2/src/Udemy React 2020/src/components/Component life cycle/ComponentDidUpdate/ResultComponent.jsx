import React, { Component } from 'react'
import PostsComponent from './PostsComponent'
import UsersComponent from './UsersComponent'

class ResultComponent extends Component {
  render() {
    return (
      <div>
        <PostsComponent />
        <UsersComponent />
      </div>
    )
  }
}

export default ResultComponent
