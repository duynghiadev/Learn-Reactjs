import MyText from '@/features/labs/MyText'
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

  function handleStudentClick(student: Student) {
    console.log('student click:', student)
  }

  return (
    <div>
      <Header></Header>
      <StudentCard student={john} onClick={handleStudentClick} />
      <Footer></Footer>

      <MyText></MyText>
      <MyText>easy frontend</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>

      <MyText>
        <span>easy</span>
      </MyText>

      <MyText>
        <span>easy</span> frontend
      </MyText>

      <MyText>
        <span>easy</span>
        <span>frontend</span>
      </MyText>
    </div>
  )
}

export default App
