export interface StudentProps {
  name?: string
  age: number
  isHero: boolean
  hobbyList: string[]
  sayHello: () => void
}

export default function Student({
  name = 'Default Name',
  isHero = false,
  hobbyList,
  age
}: StudentProps) {
  return (
    <div>
      <p>Student: {name}</p>
      <p>Age: {age}</p>
      <p>Hero: {isHero ? 'hero' : 'no-hero'}</p>
      <p>Hobby: {hobbyList}</p>
    </div>
  )
}
