import BallisticTrajectoryCalculator, {
  validateParams,
} from "../Functions/BallisticTrajectoryCalculator"

test.each([
  [
    {
      intervalYards: 10, //any number <= maxRangeYards
      maxRangeYards: 2000, //100-2000 yards
      dragCoefficient: "G1",
      ballisticCoefficient: 0.13,
      bulletWeightGrains: 40,
      velocityFps: 1200,
      zeroRangeYards: 100,
      sightHeightInches: 1.5,
      shootingAngleDegrees: 0, //between -90 and 90
      windSpeedMph: 0,
      windAngleDegree: 90, //>=0 and < 360
      altitudeFeet: 0,
      barometricPressureHg: 29,
      // temperatureFahrenheit: 70,
      humidityPercent: 50, //0-100%
    },
    {
      error: true,
      errorMessage:
        `BallisticTrajectoryCalculator Error(s):` +
        `\ntemperatureFahrenheit must be of type number.`,
    },
  ],
  [
    {
      intervalYards: 10, //any number <= maxRangeYards
      maxRangeYards: 2000, //100-2000 yards
      dragCoefficient: "G1",
      ballisticCoefficient: 0.13,
      bulletWeightGrains: 40,
      velocityFps: 1200,
      zeroRangeYards: 100,
      sightHeightInches: 1.5,
      shootingAngleDegrees: 0, //between -90 and 90
      windSpeedMph: 0,
      windAngleDegree: 90, //>=0 and < 360
      altitudeFeet: 0,
      barometricPressureHg: 29,
      temperatureFahrenheit: 70,
      // humidityPercent: 50, //0-100%
    },
    {
      error: true,
      errorMessage:
        `BallisticTrajectoryCalculator Error(s):` +
        `\nhumidityPercent must be of type number && >=0 && <=100.`,
    },
  ],
  [
    {},
    {
      error: true,
      errorMessage: `BallisticTrajectoryCalculator Error(s):\nintervalYards must be a number > 0 && < maxRangeYards.\nmaxRangeYards must be a number >= 100 && <= 2000\ndragCoefficient must be "G1" | "G2" | "G5" | "G6" | "G7" | "G8" | "GL"\nballisticCoefficient must be of type number && >0.\nbulletWeightGrains must be of type number && >0.\nvelocityFps must be of type number && >0.\nzeroRangeYards must be of type number && >0.\nsightHeightInches must be of type number && >0.\nshootingAngleDegrees must be of type number && between -90 and 90.\nwindSpeedMph must be of type number.\nwindAngleDegree must be of type number && >= 0 && < 360.\naltitudeFeet must be of type number.\nbarometricPressureHg must be of type number && >0.\ntemperatureFahrenheit must be of type number.\nhumidityPercent must be of type number && >=0 && <=100.`,
    },
  ],
  [
    {
      intervalYards: 500, //any number <= maxRangeYards
      maxRangeYards: 10, //100-2000 yards
      dragCoefficient: "g1",
      ballisticCoefficient: -1, //> 0
      bulletWeightGrains: -5, //> 0
      velocityFps: 0, //>0
      zeroRangeYards: 0, //>0
      sightHeightInches: 0, //>0
      shootingAngleDegrees: 91, //between -90 and 90
      windSpeedMph: -1, //>=0
      windAngleDegree: 360, //>=0 and < 360
      altitudeFeet: "2600",
      barometricPressureHg: 0, //>=0
      // temperatureFahrenheit: 70,
      humidityPercent: 510, //0-100%
    },
    {
      error: true,
      errorMessage: `BallisticTrajectoryCalculator Error(s):\nintervalYards must be a number > 0 && < maxRangeYards.\nmaxRangeYards must be a number >= 100 && <= 2000\ndragCoefficient must be "G1" | "G2" | "G5" | "G6" | "G7" | "G8" | "GL"\nballisticCoefficient must be of type number && >0.\nbulletWeightGrains must be of type number && >0.\nvelocityFps must be of type number && >0.\nzeroRangeYards must be of type number && >0.\nsightHeightInches must be of type number && >0.\nshootingAngleDegrees must be of type number && between -90 and 90.\nwindSpeedMph must be of type number.\nwindAngleDegree must be of type number && >= 0 && < 360.\naltitudeFeet must be of type number.\nbarometricPressureHg must be of type number && >0.\ntemperatureFahrenheit must be of type number.\nhumidityPercent must be of type number && >=0 && <=100.`,
    },
  ],
  [
    {
      intervalYards: 500, //any number <= maxRangeYards
      maxRangeYards: 10, //100-2000 yards
      dragCoefficient: "g1",
      ballisticCoefficient: -1, //> 0
      bulletWeightGrains: -5, //> 0
      velocityFps: 0, //>0
      zeroRangeYards: 0, //>0
      sightHeightInches: 0, //>0
      shootingAngleDegrees: 91, //between -90 and 90
      windSpeedMph: -1, //>=0
      windAngleDegree: 360, //>=0 and < 360
      altitudeFeet: "2600",
      barometricPressureHg: 0, //>=0
      // temperatureFahrenheit: 70,
      humidityPercent: 510, //0-100%
    },
    {
      error: true,
      errorMessage: `BallisticTrajectoryCalculator Error(s):\nintervalYards must be a number > 0 && < maxRangeYards.\nmaxRangeYards must be a number >= 100 && <= 2000\ndragCoefficient must be "G1" | "G2" | "G5" | "G6" | "G7" | "G8" | "GL"\nballisticCoefficient must be of type number && >0.\nbulletWeightGrains must be of type number && >0.\nvelocityFps must be of type number && >0.\nzeroRangeYards must be of type number && >0.\nsightHeightInches must be of type number && >0.\nshootingAngleDegrees must be of type number && between -90 and 90.\nwindSpeedMph must be of type number.\nwindAngleDegree must be of type number && >= 0 && < 360.\naltitudeFeet must be of type number.\nbarometricPressureHg must be of type number && >0.\ntemperatureFahrenheit must be of type number.\nhumidityPercent must be of type number && >=0 && <=100.`,
    },
  ],
])("validateParams Invalid Tests", (inputObject, outputObject) => {
  //@ts-ignore
  expect(validateParams(inputObject)).toStrictEqual(outputObject)
})
test.each([
  [
    {
      intervalYards: 100, //any number <= maxRangeYards
      maxRangeYards: 10, //100-2000 yards
      // dragCoefficient: "g1",
      ballisticCoefficient: 0, //> 0
      bulletWeightGrains: 0, //> 0
      velocityFps: 0, //>0
      zeroRangeYards: 0, //>0
      sightHeightInches: 0, //>0
      shootingAngleDegrees: -101, //between -90 and 90
      windSpeedMph: -1, //>=0
      windAngleDegree: -1, //>=0 and < 360
      altitudeFeet: -100,
      barometricPressureHg: 0, //>=0
      // temperatureFahrenheit: 70,
      humidityPercent: -1, //0-100%
    },
  ],
  [
    {
      intervalYards: 100, //any number <= maxRangeYards
      maxRangeYards: 1000, //100-2000 yards
      // dragCoefficient: "g1",
      ballisticCoefficient: 0, //> 0
      bulletWeightGrains: 0, //> 0
      velocityFps: 0, //>0
      zeroRangeYards: 0, //>0
      sightHeightInches: 0, //>0
      shootingAngleDegrees: 91, //between -90 and 90
      windSpeedMph: -1, //>=0
      windAngleDegree: 360, //>=0 and < 360
      altitudeFeet: 15000,
      barometricPressureHg: 0, //>=0
      // temperatureFahrenheit: 70,
      humidityPercent: 101.1, //0-100%
    },
  ],
])("validateParams Invalid Tests", (input) => {
  //@ts-ignore
  let result = validateParams(input)
  expect(result.error).toBe(true)

  let errorWords = [
    // "intervalYards",
    // "maxRangeYards",
    "dragCoefficient",
    "ballisticCoefficient",
    "bulletWeightGrains",
    "velocityFps",
    "zeroRangeYards",
    "sightHeightInches",
    "shootingAngleDegrees",
    "windSpeedMph",
    "windAngleDegree",
    // "altitudeFeet",
    "barometricPressureHg",
    "temperatureFahrenheit",
    "humidityPercent",
  ]
  errorWords.forEach((e) => {
    expect(result.errorMessage).toContain(e)
  })
})
