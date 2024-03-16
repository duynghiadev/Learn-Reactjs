// ReturnType: The return type of function Type

function exampleFunction_5(): number {
  return 42
}

type ExampleReturnType = ReturnType<typeof exampleFunction_5>

const returnValue: ExampleReturnType = 42 // The return type of exampleFunction_5 is number
