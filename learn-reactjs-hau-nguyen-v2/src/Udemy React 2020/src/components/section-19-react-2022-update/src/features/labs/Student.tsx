import { Student } from '@/components/models'

export interface StudentCardProps {
  student: Student
}

// Props are READ ONLY
// DO NOT MUTATE Props
// Props are immutable

export function StudentCard({ student }: StudentCardProps) {
  let { name, isHero, age, hobbyList } = student

  // name = 'Bob'
  function handleClick() {
    student.name = 'Bob'
    console.log(student)
    // - not trigger re-render
    // inconsistent data
  }

  return (
    <div onClick={handleClick}>
      <p>Student: {name}</p>
      <p>Age: {age}</p>
      <p>Hero: {isHero ? 'hero' : 'no-hero'}</p>
      <p>Hobby: {hobbyList}</p>
    </div>
  )
}
