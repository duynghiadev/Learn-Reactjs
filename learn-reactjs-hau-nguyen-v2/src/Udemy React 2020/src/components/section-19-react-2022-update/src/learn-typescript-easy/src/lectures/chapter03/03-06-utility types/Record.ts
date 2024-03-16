// Record<Keys, Type>: A type with key from Keys and has value of Type

type ExampleKeys_1 = 'a' | 'b' | 'c'
type ExampleType_1 = number

const recordExample: Record<ExampleKeys_1, ExampleType_1> = {
  a: 1,
  b: 2,
  c: 3
} // Record with keys 'a', 'b', 'c' and number values
