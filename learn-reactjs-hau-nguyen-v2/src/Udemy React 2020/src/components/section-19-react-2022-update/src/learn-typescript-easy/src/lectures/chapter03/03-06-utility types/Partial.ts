interface Example {
  name: string
  age: number
}

type PartialExample = Partial<Example>

const partialExample: PartialExample = {} // All properties are optional now
