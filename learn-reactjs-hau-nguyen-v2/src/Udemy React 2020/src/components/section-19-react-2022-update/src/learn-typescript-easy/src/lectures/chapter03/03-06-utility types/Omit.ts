// Omit<Type, Keys>: A type by omitting a set of Keys from Type

interface Example_4 {
  name_4: string
  age_4: number
  gender_4: string
}

type OmittedExample = Omit<Example_4, 'gender_4'>

const omittedExample: OmittedExample = {
  name_4: 'John',
  age_4: 30
} // 'gender' property is omitted
