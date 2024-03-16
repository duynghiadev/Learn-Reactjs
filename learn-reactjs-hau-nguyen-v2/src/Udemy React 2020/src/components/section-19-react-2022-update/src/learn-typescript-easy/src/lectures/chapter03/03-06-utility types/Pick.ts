// Pick<Type, Keys>: A type by picking a set of Keys from Type

interface Example_3 {
  name_3: string
  age_3: number
  gender_3: string
}

type PickedExample = Pick<Example_3, 'name_3' | 'age_3'>

const pickedExample: PickedExample = {
  name_3: 'John',
  age_3: 30
} // Only 'name_3' and 'age_3' properties are picked
