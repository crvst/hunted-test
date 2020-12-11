export default function times(n = 1, cb: (...args: any[]) => any): any[] {
  return [...Array(n)].map(cb);
}
