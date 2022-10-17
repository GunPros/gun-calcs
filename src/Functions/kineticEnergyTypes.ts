export type kineticEnergyParamsType = {
  bulletWeightGrains: number
  velocityFps: number
}
export type kineticEnergyReturnType = {
  kineticEnergyFtLbs: number | null
  error: boolean
  errorMessage: null | string
}
