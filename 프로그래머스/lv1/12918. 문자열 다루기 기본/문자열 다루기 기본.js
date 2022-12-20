function solution(s) {
  if (s.length === 4 || s.length === 6) {
    const numbers = Array.from(s).map((item) => Number(item))

    return numbers.every((a) => !isNaN(a))
  } else {
    return false
  }
}
