function solution(x) {
  return (
    x % String(x)
        .split('')
        .map((item) => Number(item))
        .reduce((a, b) => a + b) === 0
  )
}
