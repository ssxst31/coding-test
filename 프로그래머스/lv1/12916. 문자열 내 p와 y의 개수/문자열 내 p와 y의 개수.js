function solution(s) {
  return (
    s
      .toLowerCase()
      .split('')
      .filter((item) => item === 'y').length ===
    s
      .toLowerCase()
      .split('')
      .filter((item) => item === 'p').length
  )
}
