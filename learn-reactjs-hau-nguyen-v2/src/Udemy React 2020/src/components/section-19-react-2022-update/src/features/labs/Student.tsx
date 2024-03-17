import { Student } from '@/components/models'

export interface StudentCardProps {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  const { name, isHero, age, hobbyList } = student

  return (
    <div>
      <p>Student: {name}</p>
      <p>Age: {age}</p>
      <p>Hero: {isHero ? 'hero' : 'no-hero'}</p>
      <p>Hobby: {hobbyList}</p>
    </div>
  )
}
