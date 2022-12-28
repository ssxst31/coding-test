function solution(x) {
  if (Math.sqrt(x) !== ~~Math.sqrt(x)) {
    return -1
  } else {
    return (Math.sqrt(x) + 1) ** 2
  }
}
