import React from 'react'

const ProductList = ({ productList }) => {
  return (
    <div className='product-list'>
      <h2>Products</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <div className='product'>
              <h3>{product.title}</h3>
              <p>{product.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
