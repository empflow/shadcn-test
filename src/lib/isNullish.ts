export default function isNullish(val: unknown) {
  if (val === undefined || val === null) return true;
  return false;
}
