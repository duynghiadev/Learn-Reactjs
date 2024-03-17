import { Student } from '../../App'

interface StudentProps {
  student: Student
}

export default function Student({ student }: StudentProps) {
  return (
    <div>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Gender: {student.gender}</p>
      {student.address && <p>Address: {student.address}</p>}
    </div>
  )
}
