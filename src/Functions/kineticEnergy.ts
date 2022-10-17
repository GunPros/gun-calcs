export default function kineticEnergy({
  bulletWeightGrains,
  velocityFps,
}: {
  bulletWeightGrains: number
  velocityFps: number
}):
  | { kineticEnergyFtLbs: number; error: false; errorMessage: null }
  | { kineticEnergyFtLbs: null; error: true; errorMessage: string } {
  let error = false
  let errorMessage = `kineticEnergy Error(s):`
  if (typeof bulletWeightGrains !== "number" || bulletWeightGrains <= 0) {
    error = true
    errorMessage +=
      "\nbulletWeightGrains param must be of type number and greater than 0."
  }
  if (typeof velocityFps !== "number" || velocityFps < 0) {
    error = true
    errorMessage += "\nvelocityFps param must be of type number and greater than 0."
  }

  if (error) return { kineticEnergyFtLbs: null, error, errorMessage }

  let kineticEnergy = (bulletWeightGrains * Math.pow(velocityFps, 2)) / (14000 * 32.174)

  return { kineticEnergyFtLbs: kineticEnergy, error: false, errorMessage: null }
}
