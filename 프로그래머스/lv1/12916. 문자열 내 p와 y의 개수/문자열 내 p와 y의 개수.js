function solution(s) {
  const findLength = (text) => {
    return s
      .toLowerCase()
      .split('')
      .filter((item) => item === text).length
  }

  const yLength = findLength('y')

  const pLength = findLength('p')

  return yLength === pLength
}
