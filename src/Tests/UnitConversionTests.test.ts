import { errorsList } from "../errorsList"
import {
  ftLbsToJoules,
  joulesToFtLbs,
  ouncesToPounds,
  poundsToOunces,
} from "../Functions/UnitsConversion"

//test ouncesToPounds()
test.each([
  [16, 1],
  [32, 2],
])("ouncesToPounds() Valid Tests", (input, output) => {
  expect(ouncesToPounds(input)).toBe(output)
})
test.each([["16"], [null], [null]])("ouncesToPounds() Invalid Tests", (input) => {
  //@ts-ignore
  expect(() => ouncesToPounds(input)).toThrowError(
    errorsList.paramNotType("ouncesToPounds", "ounces", input, "number"),
  )
})

//test poundsToOunces()
test.each([
  [1, 16],
  [2, 32],
])("poundsToOunces() Valid Tests", (input, output) => {
  expect(poundsToOunces(input)).toBe(output)
})
test.each([["16"], [null], [null]])("poundsToOunces() Invalid Tests", (input) => {
  //@ts-ignore
  expect(() => poundsToOunces(input)).toThrowError(
    errorsList.paramNotType("poundsToOunces", "pounds", input, "number"),
  )
})

// test ftLbsToJoules
test.each([[1, 1.35581794833508]])("ftLbsToJoules() Valid Tests", (input, output) => {
  expect(ftLbsToJoules(input)).toBe(output)
})
test.each([["16"], [null], [null]])("ftLbsToJoules() Invalid Tests", (input) => {
  //@ts-ignore
  expect(() => ftLbsToJoules(input)).toThrowError(
    errorsList.paramNotType("ftLbsToJoules", "ftLbs", input, "number"),
  )
})

// test joulesToFtLbs
test.each([[1, 0.7375621492752636]])("joulesToFtLbs() Valid Tests", (input, output) => {
  expect(joulesToFtLbs(input)).toBe(output)
})
test.each([["16"], [null], [null]])("joulesToFtLbs() Invalid Tests", (input) => {
  //@ts-ignore
  expect(() => joulesToFtLbs(input)).toThrowError(
    errorsList.paramNotType("joulesToFtLbs", "joules", input, "number"),
  )
})
