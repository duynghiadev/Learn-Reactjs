import './App.scss'
import CounterFeature from './Counter/index.jsx'

function App() {
  const color = 'goldenrod'
  const backgroundUrl = 'https://images.unsplash.com/photo-1709642717827-9621f2a978a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'

  return (
    <div className="App" style={{ color: color, backgroundImage: `url('${backgroundUrl}')` }}>
      <h2>This is section 13, I learned on udemy by HauNguyen</h2>
      <CounterFeature />
    </div>
  )
}

export default App
