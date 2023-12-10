import JsType from "../types/jsType";

export const getRequiredErrMsg = (fieldName: string) =>
  `${fieldName} is requried`;

export const getNumTooSmallErrMsg = (fieldName: string, min: number) =>
  `Minimum allowed ${fieldName.toLowerCase()} is ${min}`;
export const getNumTooBigErrMsg = (fieldName: string, max: number) =>
  `Maximum allowed ${fieldName.toLowerCase()} is ${max}`;

export const getStrTooShortErrMsg = (fieldName: string, min: number) =>
  `${fieldName} must be at least ${min} characters long`;
export const getStrTooLongErrMsg = (fieldName: string, max: number) =>
  `${fieldName} must not be longer than ${max} characters`;

export const getInvalidTypeErrMsg = (fieldName: string, expectedType: JsType) =>
  `${fieldName} must be a${expectedType[0] === "a" ? "n" : ""} ${expectedType}`;

export const getInvalidNumberErrMsg = (fieldName: string) =>
  `${fieldName} is not a valid number`;
