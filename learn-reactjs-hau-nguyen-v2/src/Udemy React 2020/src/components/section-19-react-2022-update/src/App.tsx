import { MainLayout } from '@/components/Layout'
import { Widget } from '@/components/common'
import MyText from '@/features/labs/MyText'
import './App.css'
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
      <MainLayout>
        <StudentCard student={john} onClick={handleStudentClick} />
      </MainLayout>

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

      <div>
        <div>
          <Widget title='Earning Overview'>Chart 1</Widget>
        </div>
        <div>
          <Widget title='Revenue Sources'>
            <div>Chart 2</div>
          </Widget>
        </div>
        <div>
          <Widget title='Earning Overview'>Chart 3</Widget>
        </div>
        <div>
          <Widget title='Earning Overview'>Chart 4</Widget>
        </div>
      </div>
    </div>
  )
}

export default App
