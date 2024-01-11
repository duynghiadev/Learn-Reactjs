import { DuckSpecies } from '../enums/DuckSpecies'

export class Duck {
  constructor(name: string, size: number, species: DuckSpecies) {
    this.name = name
    this.size = size
    this.species = species
  }

  public name: string

  public size: number

  public species: DuckSpecies
}
