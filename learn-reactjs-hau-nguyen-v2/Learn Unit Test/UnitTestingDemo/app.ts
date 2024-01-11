import { getDucksInARow } from './logic/DuckLogic'
import { Duck } from './models/Duck'
import { DuckSpecies } from './enums/DuckSpecies'

let ducks = [
  new Duck('Donald', 6, DuckSpecies.KING_EIDER),
  new Duck('Daffy', 1, DuckSpecies.KING_EIDER),
  new Duck('Huey', 2, DuckSpecies.DOMESTIC),
  new Duck('Dewey', 1, DuckSpecies.MANDARIN),
  new Duck('Louie', 3, DuckSpecies.DOMESTIC)
]

getDucksInARow(ducks)
console.log(ducks)
