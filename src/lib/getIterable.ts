export default function getIterable(length: number) {
  const iterable: number[] = [];
  for (let i = 0; i < length; i++) iterable.push(i);
  return iterable;
}
