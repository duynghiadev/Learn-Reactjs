import CardJSX from './CardJSX'

/**
 * For a simpler way that doesn’t need functions as props, we can assign JSX as a component prop as follows:
 */
function CardAppJSX() {
  return (
    <CardJSX
      title={<h2>Card Title using JSX</h2>}
      body={
        <div>
          <p>Some Content</p>
          <a href='/link'>Some Link</a>
        </div>
      }
      action={<button onClick={() => console.log('clicked')}>Some Action</button>}
    />
  )
}

export default CardAppJSX
