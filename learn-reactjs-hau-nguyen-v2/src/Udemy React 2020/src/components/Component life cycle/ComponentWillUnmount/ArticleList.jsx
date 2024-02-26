import React, { PureComponent } from 'react'

class ArticleList extends PureComponent {
  render() {
    const { articles } = this.props
    return (
      <div>
        {articles &&
          articles.map((article) => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          ))}
      </div>
    )
  }
}

export default ArticleList
