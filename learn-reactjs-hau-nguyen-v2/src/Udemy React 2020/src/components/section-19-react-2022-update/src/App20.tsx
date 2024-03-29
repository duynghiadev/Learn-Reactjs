import { Fragment, useEffect, useState } from 'react'
import './App.css'
import { Student } from './components/models'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const john: Student = {
    name: 'John',
    age: 22,
    isHero: true,
    hobbyList: ['eat', ' sleep', ' code']
  }

  function handleStudentClick(student: Student) {
    console.log('student click:', student)
  }

  // server
  const studentList = [
    { id: 1, name: 'easy' },
    { id: 2, name: 'frontend' }
  ]

  // client
  const statusList = ['pending', 'active']

  return (
    <div>
      <ul>
        {studentList.map((student) => (
          <Fragment>
            <li key={student.id}>{student.name}</li>
            <li key={student.id}>{student.name}</li>
          </Fragment>
        ))}
      </ul>

      <ul>
        {statusList.map((status, idx) => (
          <li key={idx}>{status}</li>
        ))}
      </ul>

      {/* {loading && <p>Loading...</p>}
      {loading ? <p>Loading...</p> : <p>data ready!</p>}

      <p>{loading ? 'loading...' : 'data ready...'}</p>

      {true && 'show true'}
      {false && 'show false'}
      {'' && 'show empty'}
      {'0' && 'show zero string'}
      {[].length > 0 && 'show zero'}
      {Boolean(NaN) && 'show NaN'}

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
      </div> */}
    </div>
  )
}

export default App
