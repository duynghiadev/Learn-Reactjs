import './App.css'
import { Footer, Header } from './components/common'
import Student from './features/labs/Student'

export interface Student {
  name: string
  age: number
  gender: string
  address?: string
}

const App = () => {
  const student: Student = {
    name: 'John Doe',
    age: 20,
    gender: 'male',
    address: '123 Main Street'
  }

  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <Student student={student} />
    </div>
  )
}

export default App
