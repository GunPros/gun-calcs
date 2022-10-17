import { errorsList } from "./errorsList"

test.each([
  ["functionOne", "param1", 0, "number"],
  ["functionTwo", "param2", null, "string"],
  ["functionTwo", "param2", undefined, "boolean"],
])(
  "errorsList.paramNotType Valid Tests",
  (functionName, paramLabel, providedParamValue, requiredType) => {
    console.log(
      //@ts-ignore
      errorsList.paramNotType(functionName, paramLabel, providedParamValue, requiredType),
    )
    expect(
      //@ts-ignore
      errorsList.paramNotType(functionName, paramLabel, providedParamValue, requiredType),
    ).toBe(
      `Invalid ${paramLabel} param passed to ${functionName}. ${paramLabel} must be of type ${requiredType}, you passed a param of type ${typeof providedParamValue}`,
    )
  },
)
