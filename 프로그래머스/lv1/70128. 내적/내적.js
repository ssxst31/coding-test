function solution(a, b) {
  return a.map((item, index) => item * b[index]).reduce((a, b) => a + b)
}