function solution(arr) {
  const arrSum = arr.reduce((a, b) => a + b)

  return arrSum / arr.length
}
