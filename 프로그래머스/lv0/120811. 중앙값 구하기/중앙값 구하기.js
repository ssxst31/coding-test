function solution(array) {
  return array.sort((a, b) => b - a)[Math.floor(array.length / 2)]
}