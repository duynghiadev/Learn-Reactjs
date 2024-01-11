import { Duck } from './Duck'
import { DuckSpecies } from '../enums/DuckSpecies'

export class Dam {
  constructor(waterCapacity: number, ducks: Duck[], forbiddenDuckSpecies: DuckSpecies[]) {
    this.waterCapacity = waterCapacity
    this.ducks = ducks
    this.forbiddenDuckSpecies = forbiddenDuckSpecies
  }

  public waterCapacity: number

  public ducks: Duck[]

  public forbiddenDuckSpecies: DuckSpecies[]
}
