import './App.css'
import { Footer, Header } from './components/common'
import { Student } from './components/models'
import { StudentCard } from './features/labs/Student'

const App = () => {
  const john: Student = {
    name: 'John',
    age: 22,
    isHero: true,
    hobbyList: ['eat', ' sleep', ' code']
  }

  return (
    <div>
      <Header></Header>
      <StudentCard student={john} />
      <Footer></Footer>
    </div>
  )
}

export default App
