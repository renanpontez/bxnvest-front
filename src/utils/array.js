export function distinct(arr) {
  return arr.filter((value, i, self) => self.indexOf(value) === i)
}