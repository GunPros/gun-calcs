import kineticEnergy from "../Functions/kineticEnergy"

test.each([
  [50, 1200, 159.84512783170084],
  [115, 1150, 337.6450816542195],
  [62, 3050, 1280.4371764246196],
])(
  "kineticEnergy Valid Tests",
  (bulletWeightGrains, velocityFps, calculatedKineticEnergy) => {
    expect(kineticEnergy({ bulletWeightGrains, velocityFps })).toStrictEqual({
      error: false,
      kineticEnergyFtLbs: calculatedKineticEnergy,
      errorMessage: null,
    })
  },
)
test.each([
  [
    0,
    -1,
    "kineticEnergy Error(s):\nbulletWeightGrains param must be of type number and greater than 0.\nvelocityFps param must be of type number and greater than 0.",
  ],
  [
    undefined,
    undefined,
    "kineticEnergy Error(s):\nbulletWeightGrains param must be of type number and greater than 0.\nvelocityFps param must be of type number and greater than 0.",
  ],
  [
    undefined,
    1200,
    "kineticEnergy Error(s):\nbulletWeightGrains param must be of type number and greater than 0.",
  ],
  [
    50,
    undefined,
    "kineticEnergy Error(s):\nvelocityFps param must be of type number and greater than 0.",
  ],
])("kineticEnergy Valid Tests", (bulletWeightGrains, velocityFps, errorMessage) => {
  //@ts-ignore
  let result = kineticEnergy({ bulletWeightGrains, velocityFps })

  expect(result.error).toBe(true)
  expect(result.kineticEnergyFtLbs).toBe(null)
  expect(result.errorMessage).toStrictEqual(errorMessage)
})
