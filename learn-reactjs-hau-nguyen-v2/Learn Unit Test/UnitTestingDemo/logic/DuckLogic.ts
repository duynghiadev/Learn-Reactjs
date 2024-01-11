import { Duck } from '../models/Duck'

export function getDucksInARow(ducks: Duck[]) {
  ducks.sort((currentDuck, nextDuck) => nextDuck.size - currentDuck.size)
}
