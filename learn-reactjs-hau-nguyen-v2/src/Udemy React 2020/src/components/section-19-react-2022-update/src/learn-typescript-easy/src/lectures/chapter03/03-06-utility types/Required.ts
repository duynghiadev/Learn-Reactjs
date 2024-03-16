interface Example_1 {
  name_1?: string
  age_1?: number
}

type RequiredExample = Required<Example_1>

const requiredExample: RequiredExample = {
  name_1: 'John',
  age_1: 30
} // All properties are required now
