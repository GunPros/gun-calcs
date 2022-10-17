import { errorsList } from "../errorsList"

/**
 * @description Converts ounces to pounds
 * @param ounces
 * @returns pounds conversion
 * @example ouncesToPounds(16) //returns 1
 * ouncesToPounds(32) //returns 2
 * ouncesToPounds("16") //throws error
 * ouncesToPounds(null) //throws error
 */
export function ouncesToPounds(ounces: number): number {
  if (typeof ounces === "number") {
    return ounces / 16
  }
  throw new Error(errorsList.paramNotType("ouncesToPounds", "ounces", ounces, "number"))
}
/**
 * @description Converts pounds to ounces
 * @param pounds
 * @returns ounces conversion
 * @example poundsToOunces(1) //returns 16
 * poundsToOunces(2) //returns 32
 * poundsToOunces("2") //throws error
 * poundsToOunces(null) //throws error
 */
export function poundsToOunces(pounds: number): number {
  if (typeof pounds === "number") {
    return pounds * 16
  }
  throw new Error(errorsList.paramNotType("poundsToOunces", "pounds", pounds, "number"))
}

/**
 * @description Converts Foot-pounds to Joules
 * @param ftLbs
 * @returns Joules conversion
 * @example  ftLbsToJoules(1) //return 1.35581794833508
 * ftLbsToJoules("1") //throws error
 * ftLbsToJoules(null) //throws error
 */
export function ftLbsToJoules(ftLbs: number): number {
  if (typeof ftLbs === "number") {
    return ftLbs * 1.35581794833508
  }
  throw new Error(errorsList.paramNotType("ftLbsToJoules", "ftLbs", ftLbs, "number"))
}

/**
 * @description Converts Joules to Foot-pounds
 * @param joules
 * @returns Foot-Pounds conversion
 * @example joulesToFtLbs(1) //returns 0.7375621492752636
 * joulesToFtLbs("1") //throws error
 * joulesToFtLbs(null) //throws error
 */
export function joulesToFtLbs(joules: number): number {
  if (typeof joules === "number") {
    return joules / 1.35581794833508
  }
  throw new Error(errorsList.paramNotType("joulesToFtLbs", "joules", joules, "number"))
}
