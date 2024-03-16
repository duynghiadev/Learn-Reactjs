interface Example_2 {
  readonly name_2: string
  readonly age_2: number
}

const readonlyExample: Readonly<Example_2> = {
  name_2: 'John',
  age_2: 30
} // All properties are readonly now
