import { memo } from 'react'
import FibonacciComputation from './FibonacciComputation'

const ExpensiveComputationComponent = memo(FibonacciComputation)

export default ExpensiveComputationComponent
