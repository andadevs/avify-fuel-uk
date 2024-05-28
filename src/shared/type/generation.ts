interface IFuel {
  fuel: string
  perc: number
}
export interface IGeneration {
  from?: string
  to?: string
  generationmix: Array<IFuel>
}