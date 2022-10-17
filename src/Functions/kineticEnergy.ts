import type {
  kineticEnergyParamsType,
  kineticEnergyReturnType,
} from "./kineticEnergyTypes"

/**
 * @description Calculate the kinetic energy of a bullet
 * @returns kineticEnergy in Foot-Pounds
 * @example kineticEnergy({bulletWeightGrains: 62, velocityFps: 3050})//returns {kineticEnergyFtLbs: 1280.4371764246198, error: false, errorMessage: null}
 * kineticEnergy({bulletWeightGrains: 0, velocityFps: 3050})//returns { kineticEnergyFtLbs: null, error: true; errorMessage: "kineticEnergy Error(s): bulletWeightGrains param must be of type number and greater than 0."}
 * kineticEnergy({bulletWeightGrains: 62, velocityFps: undefined})//returns { kineticEnergyFtLbs: null, error: true; errorMessage: "kineticEnergy Error(s): velocityFps param must be of type number and greater than 0."}
 */
export default function kineticEnergy(
  kineticEnergyParams: kineticEnergyParamsType,
): kineticEnergyReturnType {
  let { bulletWeightGrains, velocityFps } = kineticEnergyParams

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
