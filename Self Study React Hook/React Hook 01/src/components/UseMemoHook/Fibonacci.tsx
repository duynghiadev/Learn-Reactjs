// This is function caculate Fibonacci number using useMemo Hook

export const fibonacci = (numberFibo: number): number => {
  console.log('numberFibo:', numberFibo)

  if (numberFibo <= 1) return 1

  const fibSequence: number[] = [1, 1]
  console.log('fibSequence initial:', fibSequence)

  for (let i = 2; i <= numberFibo; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]
    console.log('fibSequence[i]:', fibSequence[i])
  }
  console.log('fibSequence after:', fibSequence)

  console.log('fibSequence[numberFibo]:', fibSequence[numberFibo])
  return fibSequence[numberFibo]
}
