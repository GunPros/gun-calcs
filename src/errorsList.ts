export const errorsList = {
  paramNotType: (
    functionName: string,
    paramLabel: string,
    providedParamValue: any,
    requiredType:
      | "bigint"
      | "boolean"
      | "function"
      | "number"
      | "object"
      | "string"
      | "symbol"
      | "undefined",
  ) => {
    return `Invalid ${paramLabel} param passed to ${functionName}. ${paramLabel} must be of type ${requiredType}, you passed a param of type ${typeof providedParamValue}`
  },
}
