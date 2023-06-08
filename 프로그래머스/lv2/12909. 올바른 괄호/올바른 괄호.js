function solution(s) {
  let count = 0
  let i = 0

  while (s.length > i) {
    if (s[i] === '(') {
      count = count + 1
    } else {
      count = count - 1
    }
    i++
    if (count < 0) return false
  }

  if (!count) return true

  return false
}
