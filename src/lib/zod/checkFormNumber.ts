import isNullish from "../isNullish";

export default function checkFormNumber(val: any) {
  return !isNullish(val) && val !== "";
}
