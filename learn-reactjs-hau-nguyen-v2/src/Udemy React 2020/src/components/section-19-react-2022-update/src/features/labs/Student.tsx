import { Student } from '@/components/models'

export interface StudentCardProps {
  student: Student
  onClick?: (student: Student) => void
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  let { name, isHero, age, hobbyList } = student

  return (
    <div onClick={() => onClick?.(student)}>
      <p>Student: {name}</p>
      <p>Age: {age}</p>
      <p>Hero: {isHero ? 'hero' : 'no-hero'}</p>
      <p>Hobby: {hobbyList}</p>
    </div>
  )
}
