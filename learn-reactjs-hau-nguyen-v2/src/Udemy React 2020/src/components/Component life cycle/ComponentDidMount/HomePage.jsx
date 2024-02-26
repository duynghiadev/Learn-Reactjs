import React, { PureComponent } from 'react'
import Loader from './Loader'
import ProductList from './ProductList'
import { analytics } from './analytics' // Assuming analytics is imported from an appropriate module
import { productApi } from './productApi' // Assuming productApi is imported from an appropriate module

class HomePage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      productList: []
    }
  }

  async componentDidMount() {
    try {
      // Send GA page view tracking
      analytics.page('Home page')

      const productList = await productApi.getAll(5) // Limiting to 5 articles

      this.setState({
        productList,
        loading: false
      })
    } catch (error) {
      console.log('Failed to fetch product list: ', error)
      this.setState({ loading: false })
    }
  }

  render() {
    const { loading, productList } = this.state
    if (loading) return <Loader />
    return <ProductList productList={productList} />
  }
}

export default HomePage
