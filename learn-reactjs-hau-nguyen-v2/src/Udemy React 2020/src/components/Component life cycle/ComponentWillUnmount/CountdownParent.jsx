import React, { PureComponent } from 'react'
import Countdown from './Countdown'
import ArticleList from './ArticleList'

class CountdownParent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      currentSecond: 0,
      articles: []
    }
  }

  componentDidMount() {
    this.fetchData()
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        currentSecond: prevState.currentSecond - 1
      }))
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  fetchData() {
    // Fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // Limiting to 5 articles
        const limitedData = data.slice(0, 5)
        this.setState({ articles: limitedData })
      })
      .catch((error) => console.error('Error fetching data:', error))
  }

  render() {
    const { currentSecond, articles } = this.state
    return (
      <div>
        <Countdown currentSecond={currentSecond} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default CountdownParent
