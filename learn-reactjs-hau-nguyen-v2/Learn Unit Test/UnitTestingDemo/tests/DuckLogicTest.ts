import { assert } from 'chai'
import { getDucksInARow } from '../logic/DuckLogic'
import { Duck } from '../models/Duck'
import { DuckSpecies } from '../enums/DuckSpecies'

describe('Duck Logic', () => {
  describe('Get Ducks in a Row', () => {
    it('should sort ducks descending according to size', function () {
      let ducks = getMockDucks()
      getDucksInARow(ducks)

      let isValid = true
      for (let i = 0; i < ducks.length - 1; i++) {
        const currentDuck = ducks[i]
        const nextDuck = ducks[i + 1]

        if (currentDuck.size < nextDuck.size) {
          isValid = false
          break
        }
      }

      assert.equal(isValid, true)
    })
  })
})

const getMockDucks = () => {
  return [
    new Duck('Donald', 6, DuckSpecies.KING_EIDER),
    new Duck('Daffy', 1, DuckSpecies.KING_EIDER),
    new Duck('Huey', 2, DuckSpecies.DOMESTIC),
    new Duck('Dewey', 1, DuckSpecies.MANDARIN),
    new Duck('Louie', 3, DuckSpecies.DOMESTIC)
  ]
}
