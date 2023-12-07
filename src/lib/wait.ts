export default function wait(durationMs: number) {
  return new Promise((res) => setTimeout(res, durationMs));
}
