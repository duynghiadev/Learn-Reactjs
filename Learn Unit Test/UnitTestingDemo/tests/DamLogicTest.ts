import { Duck } from '../models/Duck'
import { DuckSpecies } from '../enums/DuckSpecies'
import { Dam } from '../models/Dam'
import { checkCanDamSupportDucks, removeForbiddenDucks } from '../logic/DamLogic'
import * as chai from 'chai'

const expect = chai.expect
const should = chai.should()

describe('Dam Logic', function () {
  describe('Check Can Dam Support Ducks', function () {
    it("should return TRUE if the collective duck size of the given ducks is below 11 and the dam's water capacity is 30L", function () {
      const dam: Dam = getMockDam()
      const ducksWithCollectiveSizeBelow31: Duck[] = getMockDucksWithCollectiveSizeOf8()

      const canSupportDucks: boolean = checkCanDamSupportDucks(dam, ducksWithCollectiveSizeBelow31)

      expect(canSupportDucks).to.equal(true)
    })

    it("should return FALSE if the collective duck size of the given ducks is above 10 and the dam's water capacity is 30L", function () {
      const dam: Dam = getMockDam()
      const ducksWithCollectiveSizeBelow31: Duck[] = getMockDucksWithCollectiveSizeOf50()

      const canSupportDucks: boolean = checkCanDamSupportDucks(dam, ducksWithCollectiveSizeBelow31)

      canSupportDucks.should.equal(false)
    })
  })

  describe('Remove Forbidden Ducks', function () {
    it('should remove ducks of forbidden species', function () {
      const dam: Dam = getMockDam()

      removeForbiddenDucks(dam)

      dam.ducks.forEach((currentDuck) => {
        const duckIsForbidden =
          dam.forbiddenDuckSpecies.findIndex(
            (forbiddenSpecies) => forbiddenSpecies === currentDuck.species
          ) !== -1

        expect(duckIsForbidden).to.equal(false)
      })
    })
  })
})

const getMockDucksWithCollectiveSizeOf8 = () => {
  return [
    new Duck('Donald', 4, DuckSpecies.KING_EIDER),
    new Duck('Daffy', 1, DuckSpecies.KING_EIDER),
    new Duck('Huey', 2, DuckSpecies.DOMESTIC),
    new Duck('Dewey', 1, DuckSpecies.MANDARIN)
  ]
}

const getMockDucksWithCollectiveSizeOf50 = () => {
  return [
    new Duck('Donald', 7, DuckSpecies.KING_EIDER),
    new Duck('Daffy', 13, DuckSpecies.KING_EIDER),
    new Duck('Huey', 14, DuckSpecies.DOMESTIC),
    new Duck('Dewey', 10, DuckSpecies.MANDARIN),
    new Duck('Louie', 6, DuckSpecies.DOMESTIC)
  ]
}

const getMockDam = () => {
  return new Dam(
    30,
    [new Duck('Margret', 3, DuckSpecies.DOMESTIC), new Duck('Quackles', 1, DuckSpecies.MANDARIN)],
    [DuckSpecies.MANDARIN, DuckSpecies.KING_EIDER]
  )
}
