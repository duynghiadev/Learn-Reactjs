/**
 * Another common use case for the render props pattern is for implementing slots in their components:
 */
import Card from './Card'

function CardApp() {
  return (
    <Card
      title={() => <h2>Card Title</h2>}
      body={() => (
        <div>
          <p>Some Content</p>
          <a href='/link'>Some Link</a>
        </div>
      )}
      action={() => <button onClick={() => console.log('clicked')}>Some Action</button>}
    />
  )
}

export default CardApp
