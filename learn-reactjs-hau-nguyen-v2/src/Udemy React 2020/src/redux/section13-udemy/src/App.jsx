import './App.scss'
import styled from 'styled-components'
import CounterFeature from './Counter/index.jsx'

// css in js
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color || 'green'}
`

function App() {
  const color = 'goldenrod'
  const backgroundUrl = 'https://images.unsplash.com/photo-1709642717827-9621f2a978a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'

  return (
    <div className="App">
      <Title color="blue">Heading</Title>
      <h2>This is section 13, I learned on udemy by HauNguyen</h2>
      <CounterFeature />
    </div>
  )
}

export default App
