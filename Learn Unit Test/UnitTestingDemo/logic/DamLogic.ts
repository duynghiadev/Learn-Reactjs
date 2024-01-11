import { Dam } from '../models/Dam'
import { Duck } from '../models/Duck'

export function checkCanDamSupportDucks(dam: Dam, ducks: Duck[]): boolean {
  const LITRES_WATER_NEEDED_PER_DUCK_SIZE = 3

  let totalLitresWaterNeeded = 0

  ducks.forEach((currentDuck) => {
    const litresWaterNeededForDuck = currentDuck.size * LITRES_WATER_NEEDED_PER_DUCK_SIZE

    totalLitresWaterNeeded += litresWaterNeededForDuck
  })

  return dam.waterCapacity >= totalLitresWaterNeeded
}

export function removeForbiddenDucks(dam: Dam): Duck[] {
  let removedDucks: Duck[] = []

  dam.ducks = dam.ducks.filter((currentDuck) => {
    if (
      dam.forbiddenDuckSpecies.find((currentSpecies) => currentSpecies === currentDuck.species) >= 0
    ) {
      removedDucks.push(currentDuck)
      return false
    } else {
      return true
    }
  })

  return removedDucks
}
