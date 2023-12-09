const errCodes = {
  INVALID_DATA_SUBMITTED: "INVALID_DATA_SUBMITTED",
} as const;

export type ErrCode = keyof typeof errCodes;
export default errCodes;
