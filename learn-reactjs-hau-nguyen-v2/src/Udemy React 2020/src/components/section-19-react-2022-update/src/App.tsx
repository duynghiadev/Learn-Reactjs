import './App.css'
import { Footer, Header } from './components/common'
import Student from './features/labs/Student'

const App = () => {
  function abc() {}

  return (
    <div>
      <Header></Header>
      <Student
        name='DuyNghiaDev'
        age={18}
        isHero
        hobbyList={['eat', ' code', ' sleep']}
        sayHello={abc}
      />
      <Footer></Footer>
    </div>
  )
}

export default App
