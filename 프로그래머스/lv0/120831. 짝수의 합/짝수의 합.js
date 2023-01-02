function solution(n) {
  if (n === 1) {
    return 0
  }
    
  const array = new Array(n).fill().map((_, index) => index + 1)

  let answer = array.filter((a) => a % 2 === 0).reduce((a, b) => a + b)

  return answer
}
