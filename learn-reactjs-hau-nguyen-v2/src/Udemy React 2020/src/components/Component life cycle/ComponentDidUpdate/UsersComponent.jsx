import React, { Component } from 'react'

class UsersComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => console.error('Error fetching data:', error))
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      console.log('Users updated:', this.state.users)
    }
  }

  render() {
    const { users } = this.state
    return (
      <div>
        <h2>Users Component</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UsersComponent
