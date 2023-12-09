export default function isNumber(n: any): n is number {
  return !isNaN(n);
}
