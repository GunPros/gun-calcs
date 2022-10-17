export default function BallisticTrajectoryCalculator({
  intervalYards,
  maxRangeYards,
  dragCoefficient,
  ballisticCoefficient,
  bulletWeightGrains,
  velocityFps,
  zeroRangeYards,
  sightHeightInches,
  shootingAngleDegrees,
  windSpeedMph,
  windAngleDegree,
  altitudeFeet,
  barometricPressureHg,
  temperatureFahrenheit,
  humidityPercent,
}: {
  intervalYards: number //any > 0 number <= maxRangeYards
  maxRangeYards: number //100-2000 yards
  dragCoefficient: "G1" | "G2" | "G5" | "G6" | "G7" | "G8" | "GL"
  ballisticCoefficient: number
  bulletWeightGrains: number
  velocityFps: number
  zeroRangeYards: number
  sightHeightInches: number
  shootingAngleDegrees: number //between -90 and 90
  windSpeedMph: number
  windAngleDegree: number //>=0 and < 360
  altitudeFeet: number
  barometricPressureHg: number
  temperatureFahrenheit: number
  humidityPercent: number //0-100%
}): { error: boolean; errorMessage: string } {
  // validate params
  let paramErrors = validateParams({
    intervalYards,
    maxRangeYards,
    dragCoefficient,
    ballisticCoefficient,
    bulletWeightGrains,
    velocityFps,
    zeroRangeYards,
    sightHeightInches,
    shootingAngleDegrees,
    windSpeedMph,
    windAngleDegree,
    altitudeFeet,
    barometricPressureHg,
    temperatureFahrenheit,
    humidityPercent,
  })
  //return { error: boolean; errorMessage: string } if missing or invalid params
  if (paramErrors.error) {
    return paramErrors
  } else {
    //Calculate Coefficient
  }
}

//validate all params passed to BallisticTrajectoryCalculator
export function validateParams({
  intervalYards,
  maxRangeYards,
  dragCoefficient,
  ballisticCoefficient,
  bulletWeightGrains,
  velocityFps,
  zeroRangeYards,
  sightHeightInches,
  shootingAngleDegrees,
  windSpeedMph,
  windAngleDegree,
  altitudeFeet,
  barometricPressureHg,
  temperatureFahrenheit,
  humidityPercent,
}: {
  intervalYards: number //any > 0 number <= maxRangeYards
  maxRangeYards: number //100-2000 yards
  dragCoefficient: "G1" | "G2" | "G5" | "G6" | "G7" | "G8" | "GL"
  ballisticCoefficient: number
  bulletWeightGrains: number
  velocityFps: number
  zeroRangeYards: number
  sightHeightInches: number
  shootingAngleDegrees: number //between -90 and 90
  windSpeedMph: number
  windAngleDegree: number //>=0 and < 360
  altitudeFeet: number
  barometricPressureHg: number
  temperatureFahrenheit: number
  humidityPercent: number //0-100%
}): { error: boolean; errorMessage: string } {
  let isError = false
  let errorMessage = `BallisticTrajectoryCalculator Error(s):`
  if (
    typeof maxRangeYards !== "number" ||
    typeof intervalYards !== "number" ||
    intervalYards >= maxRangeYards
  ) {
    isError = true
    errorMessage += `\nintervalYards must be a number > 0 && < maxRangeYards.`
  }
  if (typeof maxRangeYards !== "number" || maxRangeYards < 100 || maxRangeYards > 2000) {
    isError = true
    errorMessage += `\nmaxRangeYards must be a number >= 100 && <= 2000`
  }
  if (!["G1", "G2", "G5", "G6", "G7", "G8", "GL"].includes(dragCoefficient)) {
    isError = true
    errorMessage += `\ndragCoefficient must be "G1" | "G2" | "G5" | "G6" | "G7" | "G8" | "GL"`
  }
  if (typeof ballisticCoefficient !== "number" || ballisticCoefficient <= 0) {
    isError = true
    errorMessage += `\nballisticCoefficient must be of type number && >0.`
  }
  if (typeof bulletWeightGrains !== "number" || bulletWeightGrains <= 0) {
    isError = true
    errorMessage += `\nbulletWeightGrains must be of type number && >0.`
  }
  if (typeof velocityFps !== "number" || velocityFps <= 0) {
    isError = true
    errorMessage += `\nvelocityFps must be of type number && >0.`
  }
  if (typeof zeroRangeYards !== "number" || zeroRangeYards <= 0) {
    isError = true
    errorMessage += `\nzeroRangeYards must be of type number && >0.`
  }
  if (typeof sightHeightInches !== "number" || sightHeightInches <= 0) {
    isError = true
    errorMessage += `\nsightHeightInches must be of type number && >0.`
  }
  if (
    typeof shootingAngleDegrees !== "number" ||
    shootingAngleDegrees > 90 ||
    shootingAngleDegrees < -90
  ) {
    isError = true
    errorMessage += `\nshootingAngleDegrees must be of type number && between -90 and 90.`
  }
  if (typeof windSpeedMph !== "number" || windSpeedMph < 0) {
    isError = true
    errorMessage += `\nwindSpeedMph must be of type number.`
  }
  if (
    typeof windAngleDegree !== "number" ||
    windAngleDegree < 0 ||
    windAngleDegree >= 360
  ) {
    isError = true
    errorMessage += `\nwindAngleDegree must be of type number && >= 0 && < 360.`
  }
  if (typeof altitudeFeet !== "number") {
    isError = true
    errorMessage += `\naltitudeFeet must be of type number.`
  }
  if (typeof barometricPressureHg !== "number" || barometricPressureHg <= 0) {
    isError = true
    errorMessage += `\nbarometricPressureHg must be of type number && >0.`
  }
  if (typeof temperatureFahrenheit !== "number") {
    isError = true
    errorMessage += `\ntemperatureFahrenheit must be of type number.`
  }
  if (
    typeof humidityPercent !== "number" ||
    humidityPercent < 0 ||
    humidityPercent > 100
  ) {
    isError = true
    errorMessage += `\nhumidityPercent must be of type number && >=0 && <=100.`
  }
  return { error: isError, errorMessage: errorMessage }
}
